export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 0 6px rgba(37,99,235,0.45))" }}
    >
      <defs>
        <linearGradient id="iboost-g" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      {/* ring */}
      <path
        d="M24 3 L41.3 13.5 V34.5 L24 45 L6.7 34.5 V13.5 Z"
        stroke="url(#iboost-g)"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      {/* upward chevron / rocket */}
      <path
        d="M14 30 L24 16 L34 30"
        stroke="url(#iboost-g)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="24" cy="36" r="2.6" fill="#1D4ED8" />
    </svg>
  );
}

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2">
      <LogoMark size={size} />
      <span className="text-xl font-extrabold tracking-widest">
        <span className="text-brand">IB</span>
        <span>OOST</span>
      </span>
    </span>
  );
}
