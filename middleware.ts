import { parse } from 'cookie';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { verifyToken } from './app/utils/jwt';

export default async function middleware(req: NextRequest) {
  const cookies = parse(req.headers.get('cookie') ?? '');
  const token = cookies.token;
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith('/admin') &&
    (!token || !(await verifyToken(token)))
  ) {
    return NextResponse.redirect(new URL('/admin/auth/login', req.url));
  }

  if (
    pathname.startsWith('/dashboard') &&
    (!token || !(await verifyToken(token)))
  ) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/panel/:path*'],
};
