import React, { Component } from 'react'
import { lib, translate } from 'translation-module/translations/translator'

export default class Test extends Component {


    render() {

        // console.log(translate(lib.t.en))
        return (
            <div>
                Test component
            </div>
        )
    }
}
