import React, { Component, Suspense } from 'react';
import trLogo from '../../media/images/logo_transferroom.png';
import gLogo from '../../media/images/logo_ghostel.png';
import FastLinksCompact from '../../components/other/fast-links.component';
import { Collapse } from 'reactstrap';
import './experience.scss'

export default class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: []
        }
    }

    collapse(id) {
        if (this.state.isOpen.some(i => i === id)) {
            let array = this.state.isOpen
            let index = array.indexOf(id)
            if (index > -1) {
                array.splice(index, 1);
                this.setState({
                    isOpen: array
                })
            }
        } else {
            let array = this.state.isOpen
            array.push(id)
            this.setState({
                isOpen: array
            })
        }
    }

    render() {

        return (
            <div className="wrapper">
                <div className="row no-gutters p-2" style={{ justifyContent: 'flex-end' }}><input type="checkbox" /></div>
                <div className="main__container">
                    <div className="experience-item" onClick={() => this.collapse(1)}>
                        <div className={`experience-item__logo ${this.state.isOpen.some(item => item === 1) ? 'blue-line' : ''}`}>
                            <img src={trLogo}></img>
                        </div>
                        <div className="experience-item__description-block">
                            <div className="experience-item__description-header">
                                <div className="child-container">
                                    <div className="experience-item__description-header__company-name">TransferRoom <br /> <span>Role: Fronend Developer</span></div>
                                </div>

                            </div>
                            <div className="experience-item__toggler">
                                <div className="date">Nov 2019 - Nowadays</div>
                                <div className="btn-dropdown"><i></i></div>
                            </div>
                            <Collapse isOpen={this.state.isOpen.some(item => item === 1)}>
                                <div className="experience-item__content">
                                    <span className="experience-item__content__title"><span className="first-letter">R</span>esponsibilities:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                    <span className="experience-item__content__title"><span className="first-letter">W</span>orkflow / dev tools:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="experience-item" onClick={() => this.collapse(2)}>
                        <div className={`experience-item__logo ${this.state.isOpen.some(item => item === 2) ? 'blue-line' : ''}`}>
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description-block">
                            <div className="experience-item__description-header">
                                <div className="child-container">
                                    <div className="experience-item__description-header__company-name">Ixioo <br /> <span>Role: Marketing Manager & HTML/CSS coder</span></div>
                                </div>

                            </div>
                            <div className="experience-item__toggler">
                                <div className="date">Nov 2019 - Nowadays</div>
                                <div className="btn-dropdown"><i></i></div>
                            </div>
                            <Collapse isOpen={this.state.isOpen.some(item => item === 2)}>
                                <div className="experience-item__content">
                                    <span className="experience-item__content__title"><span className="first-letter">R</span>esponsibilities:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                    <span className="experience-item__content__title"><span className="first-letter">W</span>orkflow / dev tools:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="experience-item" onClick={() => this.collapse(3)}>
                        <div className={`experience-item__logo ${this.state.isOpen.some(item => item === 3) ? 'blue-line' : ''}`}>
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description-block">
                            <div className="experience-item__description-header">
                                <div className="child-container">
                                    <div className="experience-item__description-header__company-name">Quest Ground Ent. <br /> <span>Role: Co-Founder & UI/UX designer & Frontend Developer</span></div>
                                </div>

                            </div>
                            <div className="experience-item__toggler">
                                <div className="date">Nov 2019 - Nowadays</div>
                                <div className="btn-dropdown"><i></i></div>
                            </div>
                            <Collapse isOpen={this.state.isOpen.some(item => item === 3)}>
                                <div className="experience-item__content">
                                    <span className="experience-item__content__title"><span className="first-letter">R</span>esponsibilities:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                    <span className="experience-item__content__title"><span className="first-letter">W</span>orkflow / dev tools:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="experience-item" onClick={() => this.collapse(4)}>
                        <div className={`experience-item__logo ${this.state.isOpen.some(item => item === 4) ? 'blue-line' : ''}`}>
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description-block">
                            <div className="experience-item__description-header">
                                <div className="child-container">
                                    <div className="experience-item__description-header__company-name">ForPay <br /> <span>Role: Co-Founder & Fronend Developer</span></div>
                                </div>

                            </div>
                            <div className="experience-item__toggler">
                                <div className="date">Nov 2019 - Nowadays</div>
                                <div className="btn-dropdown"><i></i></div>
                            </div>
                            <Collapse isOpen={this.state.isOpen.some(item => item === 4)}>
                                <div className="experience-item__content">
                                    <span className="experience-item__content__title"><span className="first-letter">R</span>esponsibilities:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                    <span className="experience-item__content__title"><span className="first-letter">W</span>orkflow / dev tools:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="experience-item" onClick={() => this.collapse(5)}>
                        <div className={`experience-item__logo ${this.state.isOpen.some(item => item === 5) ? 'blue-line' : ''}`}>
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description-block">
                            <div className="experience-item__description-header">
                                <div className="child-container">
                                    <div className="experience-item__description-header__company-name">GHOSTeL <br /> <span>Role: Co-Founder</span></div>
                                </div>

                            </div>
                            <div className="experience-item__toggler">
                                <div className="date">Nov 2019 - Nowadays</div>
                                <div className="btn-dropdown"><i></i></div>
                            </div>
                            <Collapse isOpen={this.state.isOpen.some(item => item === 5)}>
                                <div className="experience-item__content">
                                    <span className="experience-item__content__title"><span className="first-letter">R</span>esponsibilities:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                    <span className="experience-item__content__title"><span className="first-letter">W</span>orkflow / dev tools:</span>
                                    <div className="experience-item__content__description">
                                        <ul>
                                            <li>Wireframes prototyping and writing of the technical requirements for website</li>
                                            <li>Negotiated as client with developers and QA testing</li>
                                            <li>Lorem ipsum something shpould be here as text to show</li>
                                        </ul>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>

                </div>
                <FastLinksCompact />
            </div>
        )
    }
}

