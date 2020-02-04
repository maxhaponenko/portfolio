import React, { Component } from 'react';
import trLogo from '../../media/images/logo_transferroom.png';
import gLogo from '../../media/images/logo_ghostel.png';
import FastLinksCompact from '../../components/other/fast-links.component'

import './experience.scss'

export default class Experience extends Component {
    

    render() {
        return (
            <div className="wrapper">
                <div className="row no-gutters p-2" style={{justifyContent: 'flex-end'}}><input type="checkbox" /></div>
                <div className="main__container">
                    <div className="experience-item">
                        <div className="experience-item__logo">
                            <img src={trLogo}></img>
                        </div>
                        <div className="experience-item__description">
                            <div className="child-container">
                                <div className="experience-item__description__company-name">TransferRoom <br/> <span>Role: Fronend Developer</span></div>
                            </div>
                            
                        </div>
                        <div className="experience-item__toggler">
                            <div className="date">Nov 2019 - Nowadays</div>
                            <div className="btn-dropdown"><i></i></div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-item__logo">
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description">
                            <div className="child-container">
                                <div className="experience-item__description__company-name">GHOSTeL <br/> <span>Role: Fronend Developer</span></div>
                            </div>
                            
                        </div>
                        <div className="experience-item__toggler">
                            <div className="date">Nov 2019 - Nowadays</div>
                            <div className="btn-dropdown"><i></i></div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-item__logo">
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description">
                            <div className="child-container">
                                <div className="experience-item__description__company-name">GHOSTeL <br/> <span>Role: Fronend Developer</span></div>
                            </div>
                            
                        </div>
                        <div className="experience-item__toggler">
                            <div className="date">Nov 2019 - Nowadays</div>
                            <div className="btn-dropdown"><i></i></div>
                        </div>
                    </div>
                    <div className="experience-item">
                        <div className="experience-item__logo">
                            <img src={gLogo}></img>
                        </div>
                        <div className="experience-item__description">
                            <div className="child-container">
                                <div className="experience-item__description__company-name">GHOSTeL <br/> <span>Role: Fronend Developer</span></div>
                            </div>
                            
                        </div>
                        <div className="experience-item__toggler">
                            <div className="date">Nov 2019 - Nowadays</div>
                            <div className="btn-dropdown"><i></i></div>
                        </div>
                    </div>
                </div>
                <FastLinksCompact />
            </div>
        )
    }
}