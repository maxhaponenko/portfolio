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

        const injectPaths = (obj) => {  // The function 
            const discoveredObjects = []; // For checking for cyclic object

            if (!obj && (typeof obj !== "object" || Array.isArray(obj))) {
                throw new TypeError("First argument of finPropPath is not the correct type Object");
            }

            (function find(obj, parentPath) {
                for (const key of Object.keys(obj)) {  // use only enumrable own properties.
                    if ( typeof obj[key] === "string" ) {   
                        if (!parentPath) {
                            obj[key] = `${key}=${obj[key]}`
                        } else if (parentPath !== undefined && typeof parentPath === 'string') {
                            obj[key] = `${parentPath}.${key}=${obj[key]}`
                        }
                    } else {
                        const o = obj[key];   
                        parentPath = (!parentPath ? '' : parentPath + '.') + key              // The next object to be searched
                        if (o && typeof o === "object" && !Array.isArray(o)) { // check for null then type object
                            if (!discoveredObjects.find(obj => obj === o)) {  // check for cyclic link
                                discoveredObjects.push(o);
                                find(o, parentPath);

                                // After child object uppdated
                                // Need to remove one last parentPath node
                                let index = parentPath.lastIndexOf('.')
                                if (index > 0) {
                                    let newParentPath = parentPath.slice(0, index)
                                    parentPath = newParentPath
                                } else {
                                    parentPath = ''
                                }
                            }
                        }
                    }
                }
            } (obj));
            console.log(obj)
        }

        // Injects additional string value to each string property in object
        injectPaths(t); 

        var validator = {
            get(target, key) {
                if (typeof target[key] === 'object' && target[key] !== null) {
                    return new Proxy(target[key], validator)
                } else {
                    let translated = translate(target[key]);
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



