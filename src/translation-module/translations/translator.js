import { translationsEs } from './translationES'
import { translationsEn } from './translationEN'
import { technicalSkillsOld } from 'data/technical-skills'
// import { Translib } from '../npm-module'

class LibCreator {
    defaultOptions = {
        notEqualLibs: false
    }
    constructor(objects, options = this.defaultOptions) {
        this.dictionary = objects
        this._checkLibs()
        this.t = this._prepareLibs()
    }
    _checkLibs(objects) {
        // console.log(this.dictionary)
    }

    translate(string) {
        return string.toUpperCase()
    }

    _prepareLibs() {
        let t = {}
        Object.keys(this.dictionary).forEach(item => {
            t[item] = this.dictionary[item]
        })

        

        const parenter = {
            // get: function (target, prop) {
            //     if (prop in target) {
            //         return target[prop]
            //     } else {
            //         return 0
            //     }
            // },
            set: function (target, prop, value) {
                if (typeof value === "object") {
                    var p = new Proxy({ parent: target }, parenter);
                    for (var key in value) {
                        p[key] = value[key];
                    }
                    target[prop] = p;
                    return true
                } else {
                    target[prop] = value;
                    // target[prop].translate = () => this.translate(target);

                    return true
                }
            }
        }

        var root = new Proxy(t, parenter);
        console.log(root.en.menu.clubAds.parent.en)

        // return t
    }
    
}
















// export function translate(object) {
//     console.log(object)
//     debugger
// }

export const lib = new LibCreator({
    en: translationsEn,
    es: translationsEs
})

console.log(lib.t)
