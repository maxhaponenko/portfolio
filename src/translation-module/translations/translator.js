import { translationsRu } from './translationRU'
import { translationsEn } from './translationEN'
import TransLib from './translib'
const defaultLocale = 'en'

// Create lib with different languages
const lib = new TransLib({
    en: translationsEn,
    ru: translationsRu
})


let locale = localStorage.getItem('locale')

if (locale) {
    lib.setLocale(locale)
} else {
    lib.setLocale(defaultLocale)
    localStorage.setItem('locale', defaultLocale)
}





export default lib



