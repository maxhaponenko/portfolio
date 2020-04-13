import React, { Component } from 'react';
import './skills.scss';
import { technicalSkills, libraries } from '../../data/technical-skills'
import FastLinksCompact from '../../components/other/fast-links.component'
import ColumnListResponsive from '../../components/column-list-responsive/column-list.responsive.component'

export default class Skills extends Component {
    
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        
        const librariesObjects = [];
        libraries.forEach((item) => {
            let skillItem = `<div class="items-list-block__item libraries">${item.name}</div>`
            
            librariesObjects.push(skillItem)
        })

        const technicalSkillsObjects = [];
        technicalSkills.forEach((item, index) => {
            let showExpPostfix = () => {
                if (item.expType) {
                    return `+ ${item.expType}`
                } else {
                    return ` ${item.expType}`
                }
            }
            let postfix = showExpPostfix()
            let skillItem = `<div class="items-list-block__item">${item.name} <span>${item.experience}${postfix}</span></div>`

            technicalSkillsObjects.push(skillItem)
        })

        return (
            <div id="mainSection" className="skills">
                <div className="wrapper">
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Technical skills <span>primary</span>
                        </div>
                        <div className="main__container--padding-sm">
                            <ColumnListResponsive 
                                items={technicalSkillsObjects} 
                                maxColumns={3} 
                                breakpoints={[900, 650]}/>
                        </div>
                    </div>
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Libraries <span>familiar with</span>
                        </div>
                        <div className="main__container--padding-sm">
                            <ColumnListResponsive 
                                    items={librariesObjects} 
                                    maxColumns={3} 
                                    breakpoints={[900, 650]}/>
                        </div>
                    </div>
                    <div className="main__container">
                        <div className="main__container-heading main__container-heading--blue-highlighted">
                            Tools & Workflow
                        </div>
                        <div className="main__container">
                            <div className="row tools pl-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 tools__block">
                                    <div className="tools__block_heading">Workflow:</div>
                                    <div className="tools__block_items-list workflow">
                                        <div className="tools__block_items-list__item">- Trello</div>
                                        <div className="tools__block_items-list__item">- Asana</div>
                                        <div className="tools__block_items-list__item">- Mailjet</div>
                                        <div className="tools__block_items-list__item">- Azure DevOps</div>
                                        <div className="tools__block_items-list__item">- Slack</div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 tools__block">
                                    <div className="tools__block_heading">DevTools:</div>
                                    <div className="tools__block_items-list devtools">
                                        <div className="tools__block_items-list__item">- Chrome DevTools</div>
                                        <div className="tools__block_items-list__item">- React Developer Tools</div>
                                        <div className="tools__block_items-list__item">- Redux DevTools</div>
                                        {/* <div className="tools__block_items-list__item">- Postman</div> */}
                                        <div className="tools__block_items-list__item">- Pixel Perfect</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FastLinksCompact />
                </div>
            </div>
            // </div>
        )
    }
}