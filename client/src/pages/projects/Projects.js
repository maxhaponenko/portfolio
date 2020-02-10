import React, { Component } from 'react';
import qg_desktop from '../../media/images/projectsImages/qg_desktop.png';
import qg_mobile from '../../media/images/projectsImages/qg_mobile.png';
import press_desktop from '../../media/images/projectsImages/press_desktop.png';
import press_mobile from '../../media/images/projectsImages/press_mobile.png';
import { projects } from '../../data/projects';
import Image from '../../components/other/image-component/image';
import FastLinksCompact from '../../components/other/fast-links.component';
import './projects.scss'

export default class Projects extends Component {
    
    componentDidMount() {
        window.scroll(0, 0)
    }

    render() {
        return (
            <React.Fragment>
                {projects.map((item, index) => {
                    return (
                        <ProjectTemplate 
                            key={index}
                            templateType={item.templateType}
                            lightBackground={(index % 2 === 0) ? false : true}
                            project={item}
                        />
                    )
                })}
                <div className="wrapper pt-3">
                    <FastLinksCompact/>
                </div>
                
            </React.Fragment>
            
        ) 
    }
}

class ProjectTemplate extends Component {
    
    renderWorkProcess(workProcess) {
        return workProcess.join(' > ')
    }
    
    renderPanelLists(lists) {
        return (
            lists.map((item, index) => {
                return (
                    <div key={index} className="technologies-panel__list">
                        <p>{item.name}:</p>
                        <ul>
                            {item.items.map((el, index) => <li key={index}>{el}</li>)}
                        </ul>
                    </div>
                )
            })
        )
    }

    render() {
        const { 
            templateType,
            lightBackground,
            project
        } = this.props

        if (templateType === 1) {
            return (
                <React.Fragment>
                    {this.templateType1({ lightBackground, project })}
                </React.Fragment>
            )
        } else if (templateType === 2) {
            return (
                <React.Fragment>
                    {this.templateType2({ lightBackground, project })}
                </React.Fragment>
            )
        }
    }

    templateType1(props) {
        const { lightBackground, project } = props
        return (
            <div className={`project__container ${lightBackground ? 'light-background' : ''}`}>
                <div className="wrapper">
                    <div className="main__container">
                        <div className="project__heading">
                            <div className="project__heading_left-column">
                                <div className="name">
                                    <span>{project.name.main}</span> {project.name.additional !== undefined ? `- ${project.name.additional}` : ''}
                                    </div>
                                <div className="description">
                                    {project.projectType} | Role: {project.role}
                                    
                                    <span className="mobile-view work-items">{this.renderWorkProcess(project.workProcess)}</span>
                                    
                                </div>
                            </div>
                            <div className="project__heading_right-column">
                                <div className="work-items">{this.renderWorkProcess(project.workProcess)}</div>
                            </div>
                        </div>
                        <div className="project__body">
                            <div className="project__body_first-row">
                                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                    <Image className="desktop-image" src={project.imageSrc.desktopView} /> 
                                    {/* <img className="desktop-image" src={project.imageSrc.desktopView}></img> */}
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                    <div className="description">
                                        <div className="text">{project.description}</div>
                                        {project.link !== null && (
                                            <div className="link"><a href={project.link.href} target="_blank">{project.link.text}</a></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project__body_second-row">
                                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                    <div className="technologies-panel">
                                        {this.renderPanelLists(project.stack)}
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-12">
                                    <Image className="mobile-image" src={project.imageSrc.mobileView} /> 
                                    {/* <img className="mobile-image" src={project.imageSrc.mobileView}></img> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    templateType2(props) {
        const { lightBackground, project } = props
        return (
            <div className={`project__container ${lightBackground ? 'light-background' : ''}`}>
                <div className="wrapper">
                    <div className="main__container">
                        <div className="project__heading">
                            <div className="project__heading_left-column">
                                <div className="name">
                                    <span>{project.name.main}</span> {project.name.additional !== undefined ? `- ${project.name.additional}` : ''}
                                    </div>
                                <div className="description">
                                    {project.projectType} | Role: {project.role}
                                    
                                    <span className="mobile-view work-items">{this.renderWorkProcess(project.workProcess)}</span>
                                    
                                </div>
                            </div>
                            <div className="project__heading_right-column">
                                <div className="work-items">{this.renderWorkProcess(project.workProcess)}</div>
                            </div>
                        </div>
                        <div className="project__body">
                            <div className="project__body_first-row">
                                <div className="col-xl-8 col-lg-8 col-md-10 col-sm-12 col-12">
                                    <div className="description">
                                        <div className="text">{project.description}</div>
                                        {project.link !== null && (
                                            <div className="link"><a href={project.link.href} target="_blank">{project.link.text}</a></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project__body_second-row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Image className="desktop-image" src={project.imageSrc.desktopView} /> 
                                    {/* <img className="desktop-image" src={project.imageSrc.desktopView}></img> */}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="technologies-panel">
                                        {this.renderPanelLists(project.stack)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}