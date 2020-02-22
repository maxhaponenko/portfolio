import React, { Component } from 'react';
import FastLinks from 'components/other/fast-links.component';
import './error-page.scss'

export default class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <div className="wrapper">
                    <div className="text-block">
                        <div className="text">
                            <div>404</div>
                            <div>Can`t find page you are looking for</div>
                        </div>
                        
                    </div>
                    <FastLinks />
                </div>
            </div>
        )
    }
}