export const locales = ['en', 'zh']
export const defaultLocale = 'en'
export const localePath = (locale) => {
    return `/${locale}`
}
export const getLocale = () => {
    return locales.includes(locale) ? locale : defaultLocale
}