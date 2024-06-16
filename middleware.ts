import { parse } from 'cookie';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import type { User } from './app/dashboard/create/page';
import { verifyToken } from './app/utils/jwt';

export default async function middleware(req: NextRequest) {
  const cookies = parse(req.headers.get('cookie') ?? '');
  const token = cookies.token;
  const pathname = req.nextUrl.pathname;
  const userPayload = await verifyToken<User>(token);

  if (!userPayload) return;

  if (pathname.startsWith('/admin') && userPayload.role === 'user') {
    return NextResponse.redirect(new URL('/admin/auth/login', req.url));
  }

  if (pathname.startsWith('/dashboard') && userPayload.role === 'admin') {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/panel/:path*'],
};
