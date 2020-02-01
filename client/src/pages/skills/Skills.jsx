import React, { Component } from 'react';
import { connect } from 'react-redux'
import './skills.scss';
import { technicalSkills, libraries } from '../../data/technical-skills'

export default class Skills extends Component {
    

    render() {

        console.log(technicalSkills)
        return (
            <div id="mainSection" className="skills">
                    <div className="wrapper">
                        <div className="main__container">
                            <div className="main__container-heading main__container-heading--blue-highlighted">
                                Technical skills <span>primary</span>
                            </div>
                            <div className="main__container--padding-sm">
                                <div className="items-list-block--column">
                                    {technicalSkills.map((item) => {
                                        let showExpPostfix = () => {
                                            if (item.expType) {
                                                return `+ ${item.expType}`
                                            } else {
                                                return ` ${item.expType}`
                                            }
                                        }
                                        return (
                                        <div className="items-list-block__item">{item.name} <span>{item.experience}{showExpPostfix()}</span>
                                            </div>
                                        )
                                    })}
                                    {/* <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div>
                                    <div className="items-list-block__item">HTML, CSS</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     technicalSkills: technicalSkills,
//     libraries: libraries
// })

// export default connect(mapStateToProps, null)(Skills)