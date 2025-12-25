import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow Next.js internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js)$/)
  ) {
    return NextResponse.next();
  }

  // Allow Early Access page
  if (pathname === "/early-access") {
    return NextResponse.next();
  }

  // Redirect everything else
  const url = req.nextUrl.clone();
  url.pathname = "/early-access";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};

