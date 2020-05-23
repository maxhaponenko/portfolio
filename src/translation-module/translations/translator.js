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
            // const path = [];    // The current path being searched
            // const results = []; // The array of paths that satify the predicate === true
            if (!obj && (typeof obj !== "object" || Array.isArray(obj))) {
                throw new TypeError("First argument of finPropPath is not the correct type Object");
            }

            (function find(obj, parentPath) {
                for (const key of Object.keys(obj)) {  // use only enumrable own properties.
                    let keysLeft = Object.keys(obj).length
                    if ( typeof obj[key] === "string" ) {   
                          // Found a path
                        let a = []
                        let results = []
                        a.push(key);                // push the key
                        results.push(a.join("."));  // Add the found path to results

                        if (!parentPath) {
                            obj[key] = `${results}=${obj[key]}`
                            keysLeft = keysLeft - 1
                        } else if (parentPath !== undefined && typeof parentPath === 'string') {
                            obj[key] = `${parentPath}.${results}=${obj[key]}`
                            keysLeft = keysLeft - 1
                        }

                        // If there are no more properties to modify and script will go to near property -> clear parrentPath string
                        if (keysLeft === 0) {
                            let index = parentPath.lastIndexOf('.')
                            let newParentPath = parentPath.slice(0, index)
                            parentPath = newParentPath
                        }
                                         // remove the key.
                    } else {
                        const o = obj[key];   
                        parentPath = (!parentPath ? '' : parentPath + '.') + key              // The next object to be searched
                        if (o && typeof o === "object" && !Array.isArray(o)) { 
                              // check for null then type object
                            if (!discoveredObjects.find(obj => obj === o)) {  // check for cyclic link
                                discoveredObjects.push(o);
                                find(o, parentPath);
                            }
                            
                        }
                    }
                    
                }
            } (obj));
            console.log('Path injection done')
            console.log(obj)
        }

        injectPaths(t);
        debugger

        // function path(c, name, v, currentPath, t) {
        //     debugger
        //     var currentPath = currentPath || "root";
        
        //     for(var i in c){
        //       if(i == name && c[i] == v){
        //         t = currentPath;
        //       }
        //       else if(typeof c[i] == "object"){
        //         return path(c[i], name, v, currentPath + "." + i);
        //       }
        //     }
        
        //     return t + "." + name;
        // };
        

        // let x = {
        //     1: 2, 
        //     s: 5, 
        //     2: {
        //         3: {
        //             2: {
        //                 s: 1, 
        //                 p: 2
        //             }
        //         }
        //     }
        // }
        // let a = path(x,"s", 1)
        // console.log(a)

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



