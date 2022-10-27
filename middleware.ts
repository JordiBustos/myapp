/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get("auth");
    if (!token) {
      return NextResponse.rewrite(new URL("/signin", req.url));
    }
  }
}
