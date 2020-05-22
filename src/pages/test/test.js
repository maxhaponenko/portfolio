import React, { Component } from 'react'
import lib from 'translation-module/translations/translator'

export default class Test extends Component {


    render() {
        
        console.log(lib.t.en.a.b.some)
        return (
            <div>
                Translation: {lib.t.en.a.a}
            </div>
        )
    }
}
