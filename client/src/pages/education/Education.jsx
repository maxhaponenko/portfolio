import React, { Component, Fragment } from 'react';
import FastLinksCompact from '../../components/other/fast-links.component'
import './education.scss'

const education = [
    {
        dates: 'Apr 2019 - Aug 2019',
        universityName: 'CodeCademy',
        universityDescription: 'JavaScript course (ES5+, OOP, common.js, etc.) + pet projects',
        group: 'frontend',
        relatedToPositions: ['frontend']
    },
    {
        dates: 'Nov 2015 - Jan 2016',
        universityName: 'CodeCademy',
        universityDescription: 'HTML/CSS course',
        group: 'frontend',
        relatedToPositions: ['frontend']
    },
    {
        dates: 'Jul 2014 - Sep 2014',
        universityName: '"STEP" IT Academy',
        universityDescription: 'C# Development (incomplete education)',
        group: 'frontend',
        relatedToPositions: ['frontend']
    },
    {
        dates: 'Sep 2007 - Jun 2011',
        universityName: 'Ukrainian State University of Finance and International Trade',
        universityDescription: 'Faculty of International Economics',
        group: 'other',
        relatedToPositions: ['frontend', 'pm', 'designer', 'po']
    },
]


export default class Education extends Component {
    
    renderFrontendEducation = () => {
        
        let frontendExp = education.filter(item => item.group === 'frontend')
        
        return frontendExp.map(item => {
            return (
                <div className="row no-gutters education-item">
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

    renderOtherEducation = () => {
        let otherExperience = education.filter(item => item.group === 'other')
        return otherExperience.map(item => {
            return (
                <div className="row no-gutters education-item">
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
    
    
    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Frontend Development <span>self learning</span>
                        </div>
                        <div className="main__container p-0">
                            { this.renderFrontendEducation() }
                        </div>
                    </div>
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Other
                        </div>
                        <div className="main__container p-0">
                            { this.renderOtherEducation() }
                        </div>
                    </div>
                    <FastLinksCompact />
                </div>
            </Fragment>
        )
    }
}