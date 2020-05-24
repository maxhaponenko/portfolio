import { translationsEs } from './translationES'
import { translationsEn } from './translationEN'
import TransLib from './translib'
const locale = 'en'

// Create lib with different languages
const lib = new TransLib({
    en: translationsEn,
    es: translationsEs
})

// Set locale
lib.setLocale(locale)


export default lib



