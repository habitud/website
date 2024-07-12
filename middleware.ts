import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export { auth as md } from "@/lib/auth"

export function middleware(request: NextRequest) {

    const hostname = request.headers.get('host');

    // Define your subdomains
    const appDomain = 'app.habitud.fr';
    //const mainDomain = 'habitud.fr';

    if (hostname === appDomain) {
        // Rewrite all requests from app.habitud.fr to /dashboard
        const url = request.nextUrl.clone();
        url.pathname = `/dashboard${url.pathname}`;
        return NextResponse.rewrite(url);
    }

    // Allow all other requests to continue
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
