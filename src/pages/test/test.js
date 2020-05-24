import React, { Component } from 'react'
import lib from 'translation-module/translations/translator'

export default class Test extends Component {

    componentDidMount() {
    }

    toggle = () => {
        localStorage.setItem('locale', 'ru')
    }

    render() {
        return (
            <div style={{padding: 50}} onClick={this.toggle}>
                <div>1. {lib.t.greetings.hello}</div>
                <div>2. {lib.t.greetings.simple.hi}</div>
                <div>3. {lib.t.greetings.simple.yo}</div>
            </div>
        )
    }
}
