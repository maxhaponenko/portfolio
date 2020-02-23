import React, { Component, Fragment } from 'react';
import FastLinksCompact from '../../components/other/fast-links.component'
import './education.scss'
import { education } from '../../data/education'


export default class Education extends Component {
    
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        const renderFrontendEducation = () => {
            let frontendExp = education.filter(item => item.group === 'frontend')
            return frontendExp.map(item => {
                return (
                    <div className="education-item">
                        <div className="education-item__date">
                            {item.dates}
                        </div>
                        <div className="education-item__description">
                            <div className="education-item__description--heading">{item.universityName}</div>
                            <div className="education-item__description--text">{item.universityDescription}</div>
                        </div>
                    </div>
                )
            })  
        }

        const renderOtherEducation = () => {
            let otherExperience = education.filter(item => item.group === 'other')
            return otherExperience.map(item => {
                return (
                    <div className="education-item">
                        <div className="education-item__date">
                            {item.dates}
                        </div>
                        <div className="education-item__description">
                            <div className="education-item__description--heading">{item.universityName}</div>
                            <div className="education-item__description--text">{item.universityDescription}</div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <Fragment>
                <div className="wrapper">
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Frontend Development <span>self learning</span>
                        </div>
                        <div className="main__container p-0">
                            { renderFrontendEducation() }
                        </div>
                    </div>
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Other
                        </div>
                        <div className="main__container p-0">
                            { renderOtherEducation() }
                        </div>
                    </div>
                    <FastLinksCompact />
                </div>
            </Fragment>
        )
    }
}