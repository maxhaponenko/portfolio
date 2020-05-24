

class TransLib {
    
    constructor(objects, options = this.defaultOptions) {
        this.dictionary = objects
        this.locale = 'en' // default
        this.t = this._prepareLibs()
    }

    setLocale(string) {
        this.locale = string
    }

    _prepareLibs = () => {
        let t = {}
        Object.keys(this.dictionary).forEach(item => {
            t[item] = this.dictionary[item]
        })

        // Injects additional string value to each string property in object
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

        injectPaths(t); 

        const getPath = (string) => {
            let lastSymbolIndex = string.indexOf('=')
            let firstSymbolIndex = string.indexOf('.') + 1
            let path = string.slice(firstSymbolIndex, lastSymbolIndex)
            return path
        }

        const getTranslation = (string) => {
            let index = string.indexOf('=') + 1
            return string.slice(index, string.length)
        }

        const getValue = (obj, prop) => {
            //property not found
            if(typeof obj === 'undefined') return false;
            //index of next property split
            var _index = prop.indexOf('.')
            //property split found; recursive call
            if(_index > -1){
                //get object at property (before split), pass on remainder
                return getValue(obj[prop.substring(0, _index)], prop.substr(_index+1));
            }
            //no split; get property
            return obj[prop];
        }

        const self = this
        const validator = {
            context: self, 
            get(target, key) {
                if (typeof target[key] === 'object' && target[key] !== null) {
                    return new Proxy(target[key], validator)
                } else {
                    let path = getPath(target[key]);
                    let value = getValue(t, `${this.context.locale}${'.'}${path}`)
                    let translation = getTranslation(value)
                    return translation
                }
            },
            set(target, key, value) {
                console.error('You can`t change value of translation lib')
                return false
            }
        }
        const lib = new Proxy(t, validator)

        return lib

    }
}

export default TransLib