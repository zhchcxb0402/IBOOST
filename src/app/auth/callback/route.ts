import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin: requestOrigin } = new URL(request.url);
  const forwardedHost = request.headers.get("x-forwarded-host");
  const origin =
    forwardedHost && process.env.NODE_ENV === "production"
      ? `https://${forwardedHost}`
      : requestOrigin;
  const code = searchParams.get("code");
  const rawNext = searchParams.get("next") ?? "/";
  const next = rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/";

  if (!code) {
    return NextResponse.redirect(
      `${origin}/login?error=${encodeURIComponent("Missing auth code")}`
    );
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return NextResponse.redirect(
        `${origin}/login?error=${encodeURIComponent(error.message)}`
      );
    }
    return NextResponse.redirect(`${origin}${next}`);
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Auth callback failed";
    return NextResponse.redirect(
      `${origin}/login?error=${encodeURIComponent(msg)}`
    );
  }
}
