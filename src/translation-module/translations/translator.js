import { translationsEs } from './translationES'
import { translationsEn } from './translationEN'
const locale = 'en'

class LibCreator {
    constructor(objects, options = this.defaultOptions) {
        this.dictionary = objects
        this.t = this._prepareLibs()
    }

    locale(string) {
        this.locale = string
    }

    

    _prepareLibs() {
        let t = {}
        Object.keys(this.dictionary).forEach(item => {
            t[item] = this.dictionary[item]
        })
        this.languages = Object.keys(this.dictionary)

        const translate = (target) => {
            if (target && typeof target === 'string') {
                if (this.languages.includes(this.locale)) {
                    return target + '-translation_added'
                } else {
                    console.warn(`Locale does not match any library language. Translation is provided in ${this.languages[0]}`)
                }
            }
        }

        var validator = {
            get(target, key) {
                if (typeof target[key] === 'object' && target[key] !== null) {
                    return new Proxy(target[key], validator)
                } else {
                    let translated = translate(target[key]);
                    // debugger
                    return translated
                }
            },
            set(target, key, value) {
                console.log(target);
                console.log(key);
                console.log(value);
                console.error('You can`t change value of translation lib')
                return false
            }
        }

        const lib = new Proxy(t, validator)

        return lib
    }

}



// Create lib with different languages
const lib = new LibCreator({
    en: translationsEn,
    es: translationsEs
})

// Register locale
lib.locale(locale)


export default lib



