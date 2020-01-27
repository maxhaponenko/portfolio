import React, { Component, Fragment } from 'react';
import './main.scss'

export default class Main extends Component {
    

    render() {
        return (
            <Fragment>
                <div id="mainSection" className="main">
                    <div className="wrapper">
                        <div className="row m-0">
                            <div className="col-6 main__container">
                                <div className="main__container-heading">Summary</div> 
                                <div className="main__container-contentBlock">
                                    <p><span>Status:</span> open to proposals</p>
                                    <p><span>Job:</span> working in TransferRoom Ltd (frontend developer)</p>
                                    <p><span>Using now:</span> JS ES6+, Typescript, React & Redux, Scss, BEM, Azure DevOps, Invision, SCRUM</p>
                                    <p><span>Languages:</span></p>
                                    <p>
                                        <ul>
                                            <li>English - Intermediate / Upper-intermediate</li>
                                            <li>Ukrainian - Native</li>
                                            <li>Russian - Fluent</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="col-6 main__container">
                                <div className="main__container-heading">More</div> 
                                <div className="main__container-contentBlock contentBlock_glow">
                                    <div className="fast-links__row mb-3">
                                        <button className="btn fast-links__button">Projects</button>
                                        <button className="btn fast-links__button">Education</button>
                                    </div>
                                    <div className="fast-links__row">
                                        <button className="btn fast-links__button">Skills</button>
                                        <button className="btn fast-links__button">Experience</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5 m-0">
                            <div className="col-6 cv-questionBlock">
                                <h2>Need <span>pdf version</span><br /> of my CV?</h2>
                            </div>
                            <div className="col-6">
                                <div className="cv-downloadBlock ml-5">
                                    <div className="cv-square">
                                        <div className="cv-square__doc">CV.pdf</div>
                                        <div className="cv-square__description">on the position of Frontend Developer</div>
                                    </div>
                                    <button className="btn btn-download btn-download_aqua">
                                        Download

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}