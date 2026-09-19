# IBOOST

Gamified learning PWA — Next.js (App Router) + Tailwind CSS + shadcn/ui + Supabase.

## Setup

1. Install Node via nvm (no Homebrew needed):

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
   source ~/.zshrc
   nvm install --lts
   ```

2. Install pnpm:

   ```bash
   corepack enable && corepack prepare pnpm@latest --activate
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Configure environment:

   ```bash
   cp .env.example .env.local
   ```

   Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   from your Supabase project settings.

5. Run the dev server:

   ```bash
   pnpm dev
   ```

   App runs at http://localhost:3000.

## Useful commands

- `pnpm build` — production build
- `pnpm lint` — eslint
- `pnpm dlx shadcn@latest add <component>` — add shadcn/ui components
- `node scripts/gen-icons.mjs` — regenerate placeholder PWA icons

## Branch workflow

- `main` is the stable branch — never commit directly to it.
- Create a feature branch per task: `git checkout -b feat/<short-name>`
- Open a PR into `main` when done.
