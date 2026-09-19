# IBOOST

IBOOST is built for IB Diploma students juggling six subjects, IAs, and exams with no single place to revise from. Existing study tools are generic — they don't know the IB syllabus, HL vs SL scope, or the way IB actually assesses. IBOOST lets you pick your subjects and level, then serves curriculum-aligned material, practice tasks, and Quizlet-style flashcards drawn from the official IB curriculum and the best IB resources (InThinking, RevisionDojo, Clastify, Nail IB). It's IB-native, not a chatbot: every card and task maps to a real syllabus point, so you always know exactly what you're revising and why it matters for your grade.

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
