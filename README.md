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

   App runs at https://iboostlearningtool.vercel.app

## Auth setup

Auth is optional — the app works fully as a guest (progress in
`localStorage`). Signing in only adds cloud sync of progress.

1. Apply the database migration (creates `profiles`, `progress`, RLS
   policies, signup trigger, and self-service account deletion):

   ```bash
   pnpm supabase login
   pnpm supabase link --project-ref <PROJECT_REF>
   pnpm supabase db push
   ```

   The migration lives at `supabase/migrations/0001_profiles_progress.sql`
   (or apply it manually in the SQL editor).

2. Enable the Google provider: Supabase Dashboard → **Authentication →
   Providers → Google**. You need a Google Cloud OAuth client ID/secret;
   set the Google client's authorized redirect URI to
   `https://<PROJECT_REF>.supabase.co/auth/v1/callback`.

3. Add redirect URLs under **Authentication → URL Configuration →
   Redirect URLs**:

   - `http://localhost:3000/auth/callback`
   - `https://iboostlearningtool.vercel.app/auth/callback`

4. Email magic links use Supabase's built-in email sender, which is
   rate-limited and intended for development — configure a custom SMTP
   provider before production use.

## Useful commands

- `pnpm build` — production build
- `pnpm lint` — eslint
- `pnpm test` — unit tests (node:test via tsx)
- `pnpm dlx shadcn@latest add <component>` — add shadcn/ui components
- `node scripts/gen-icons.mjs` — regenerate placeholder PWA icons

## Branch workflow

- `main` is the stable branch — never commit directly to it.
- Create a feature branch per task: `git checkout -b feat/<short-name>`
- Open a PR into `main` when done.
