// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get('Authorization');

    if (basicAuth) {
        const auth = basicAuth.split(' ')[1];
        const [username, password] = Buffer.from(auth, 'base64').toString().split(':');

        if (username === 'admin' && password === 'password') {
            return NextResponse.next();
        }
    }
    return new Response('Unauthorized', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic',
        },
    });
}