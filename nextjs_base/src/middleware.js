import { NextResponse } from "next/server"
export function middleware(request) {
    console.log(process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME)
    const { pathname } = request.nextUrl
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }
}

export const config = {
    matcher: ["/"]
}