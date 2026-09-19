import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}

function png(size) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // truecolor RGB

  // Blue background with a white upward chevron (approximates icon.svg).
  const bg = [0x25, 0x63, 0xeb];
  const fg = [0xff, 0xff, 0xff];
  const px = Buffer.alloc(size * size * 3);
  const set = (x, y, c) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const i = (y * size + x) * 3;
    px[i] = c[0];
    px[i + 1] = c[1];
    px[i + 2] = c[2];
  };
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) set(x, y, bg);
  // chevron: two strokes meeting at (cx, cy-apex), thickness t
  const cx = size / 2;
  const apex = size * 0.36;
  const base = size * 0.62;
  const half = size * 0.2;
  const t = size * 0.05;
  for (let y = Math.floor(apex - t); y < base + t; y++) {
    const prog = (y - apex) / (base - apex);
    const lx = cx - half * prog;
    const rx = cx + half * prog;
    for (const sx of [lx, rx])
      for (let dx = -t; dx <= t; dx++) set(Math.round(sx + dx), y, fg);
  }
  // dot
  const r = size * 0.055;
  const dy = Math.round(size * 0.75);
  for (let y = -r; y <= r; y++)
    for (let x = -r; x <= r; x++)
      if (x * x + y * y <= r * r) set(Math.round(cx + x), dy + y, fg);

  const rows = [];
  for (let y = 0; y < size; y++) {
    const row = Buffer.alloc(1 + size * 3);
    px.copy(row, 1, y * size * 3, (y + 1) * size * 3);
    rows.push(row);
  }
  const raw = Buffer.concat(rows);
  const idat = deflateSync(raw);
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync("public/icons", { recursive: true });
for (const size of [192, 512]) {
  writeFileSync(`public/icons/icon-${size}.png`, png(size));
  console.log(`wrote public/icons/icon-${size}.png`);
}
