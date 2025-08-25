import { match }  from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { locales, defaultLocale } from "@/config"
import { NextResponse } from "next/server"
const publicFile = /\.(.*)$/

function getLocale(request) {
    const headers = { "accept-language": request.headers.get("accept-language") || "" }
    const languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale)
}
export function middleware(request) {
    const { pathname } = request.nextUrl
    // 如果路径包含locale，则不进行重定向
    const pathnameHasLocale = locales.some(locale => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`)
    if (pathnameHasLocale) {
        return
    }
     // 如果是 public 文件，不重定向
  if (publicFile.test(pathname)) return
    // 获取locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return NextResponse.redirect(request.nextUrl)
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}