"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen, Home, Layers, User } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

const NAV = [
  { href: "/", label: "Home", icon: Home },
  { href: "/subjects", label: "Subjects", icon: BookOpen },
  { href: "/flashcards", label: "Flashcards", icon: Layers },
  { href: "/profile", label: "Profile", icon: User },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/" || pathname.startsWith("/learn");
  return pathname.startsWith(href);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const hydrated = useHydrated();
  const onboarded = useProgress((s) => s.onboarded);
  const fullScreen =
    pathname.startsWith("/lesson/") || pathname === "/onboarding";

  useEffect(() => {
    useProgress.getState().syncDaily();
  }, []);

  useEffect(() => {
    if (hydrated && !onboarded && pathname !== "/onboarding") {
      router.replace("/onboarding");
    }
  }, [hydrated, onboarded, pathname, router]);

  if (fullScreen) return <>{children}</>;

  return (
    <div className="min-h-screen md:flex">
      {/* Sidebar (md+) */}
      <aside className="hidden md:flex md:w-60 md:flex-col md:border-r md:p-4 md:gap-1 shrink-0">
        <Link href="/" className="mb-6 px-2">
          <Logo />
        </Link>
        {NAV.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-bold text-muted-foreground hover:bg-muted transition-colors",
              isActive(pathname, href) && "text-brand bg-brand/10"
            )}
          >
            <Icon className="size-5" />
            {label.toUpperCase()}
          </Link>
        ))}
      </aside>

      <main className="mx-auto w-full max-w-md md:max-w-2xl flex-1 px-4 pb-24 md:pb-8">
        {children}
      </main>

      {/* Bottom tab bar (mobile) */}
      <nav className="fixed bottom-0 inset-x-0 z-50 border-t bg-background md:hidden">
        <div className="mx-auto flex max-w-md items-stretch justify-between px-6">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 py-2 text-[10px] font-bold text-muted-foreground",
                isActive(pathname, href) && "text-brand"
              )}
            >
              <Icon className="size-6" />
              {label.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
