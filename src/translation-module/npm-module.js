
class Translib {
    defaultOptions = {
        notEqualLibs: false
    }
    constructor(objects, options = this.defaultOptions) {
        this.dictionary = objects
        this._checkLibs()
        this.t = this._prepareLibs()
    }
    _checkLibs(objects) {
        console.log(this.dictionary)
    }
    _prepareLibs() {
        let t = {}
        Object.keys(this.dictionary).forEach(item => {
            debugger
            t[item] = this.dictionary[item]
        })
        return t
    }
    getLib() {
        return this.t
    }
}

// let defaultOptions = {
//     notEqualLibs: false
// }

// function Translib2(objects, options = defaultOptions) {
//     const dictionary = objects
//     function _checkLibs(objects) {
//         console.log(this.dictionary)
//     }
//     function _prepareLibs() {
//         let t = {}
//         Object.keys(dictionary).forEach(item => {
//             t[item] = dictionary[item]
//         })
//         return t
//     }
    
//     _checkLibs()
//     this.t = _prepareLibs()

//     return this
// }

module.exports = Translib