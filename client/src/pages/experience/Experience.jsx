import React, { Component } from 'react';
import FastLinksCompact from '../../components/other/fast-links.component';
import { Collapse } from 'reactstrap';
import './experience.scss';
import { experience } from '../../data/experience';

export default class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: [0]
        }
    }

    collapse(id) {
        console.log('hohoho: ' + id)
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
            <div className="wrapper experience">
                <div className="main__container">
                    <div className="main__container-heading main__container-heading--blue-highlighted">
                        Experience
                    </div>
                    <div className="main__container--padding-sm pl-3">
                        {experience.map((item, index) => {
                            return (
                                <ExperienceItem
                                    key={index}
                                    index={index}
                                    item={item}
                                    isOpen={this.state.isOpen}
                                    collapse={(el) => this.collapse(el)}
                                />
                            )
                        })}
                    </div>
                    
                </div>
                <FastLinksCompact />
            </div>
        )
    }
}

class ExperienceItem extends Component {
    
    renderDescriptionItem(item) {  
        const renderTitle = (title) => {
            let firstLetter = title[0]
            let withoutFirstLetter = title.slice(1)
            return (
                <span className="experience-item__content__title"><span className="first-letter">{firstLetter}</span>{withoutFirstLetter}:</span>
            )
        }
        return (
            <React.Fragment>
                {renderTitle(item.title)}
                <div className="experience-item__content__description">
                    {item.list.text !== undefined && (
                        <p>{item.text}</p>
                    )}
                    {item.list.length >= 1 && (
                        <ul style={{paddingLeft: '27px', marginBottom: '5px'}}>
                            {item.list.map(item => {
                                return <li>{item}</li>
                            })}
                        </ul>
                    )}
                </div>
            </React.Fragment>
        )
    }

    render() {
        const { index, isOpen, collapse, item } = this.props

        return (
            <div className="experience-item" onClick={() => collapse(index)}>
                <div className={`experience-item__logo ${isOpen.some(item => item === index) ? 'blue-line' : ''}`}>
                    <img src={item.imgSrc}/>
                </div>
                <div className="experience-item__description-block">
                    <div className="experience-item__description-header">
                        <div className="child-container">
                            <div className="experience-item__description-header__company-name">{item.companyName} <br /> <span>Role: {item.role} <span className="mobile-view date">({item.dates}</span>}</span></div>
                        </div>
                    </div>
                    <div className="experience-item__toggler">
                        <div className="date">{item.dates}</div>
                        <div className="btn-dropdown"><i className={isOpen.some(i => i == index) ? 'open' : 'closed'}></i></div>
                    </div>
                    <Collapse isOpen={isOpen.some(item => item === index)}>
                        <div className="experience-item__content">
                            {/* <div className="mobile-view date">Nov 2019 - Nowadays</div> */}
                            {item.descriptionItems.map(item => {
                                return this.renderDescriptionItem(item)
                            })}
                        </div>
                    </Collapse>
                </div>
            </div>
        )
    }
}