import React, { Component } from 'react';
import { projects } from '../../data/projects';
import Image from '../../components/other/image-component/image';
import FastLinksCompact from '../../components/other/fast-links.component';
import VideoPhoneFrame from './video-phone-frame/video-phone-frame';
import PhoneFrameImage from 'media/images/projectsImages/phone-frame-sumsung.png';
import { Template } from 'data/projects';
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

class OwnProps {
    templateType: Template
    lightBackground: boolean;
    project: any
}
class ProjectTemplate extends Component<OwnProps> {
    
    renderWorkProcess(workProcess) {
        return workProcess.join(' > ')
    }
    
    renderPanelList(list) {
        return (
            <div className="technologies-panel__list">
                <ul>
                    {list.map((el, index) => <li key={index}>{el}</li>)}
                </ul>
            </div>
        )
    }

    render() {
        const { 
            templateType,
            lightBackground,
            project
        } = this.props

        if (templateType === Template.TwoRows) {
            return this.templateType1({ lightBackground, project })
        } else if (templateType === Template.OneRow) {
            return this.templateType2({ lightBackground, project })
        } else if (templateType === Template.PhoneFrame) {
            return this.templateType3({ lightBackground, project })
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
                                            <div className="link"><a href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.text}</a></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project__body_second-row">
                                <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-12">
                                    <div className="technologies-panel">
                                        {this.renderPanelList(project.stack)}
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
                                            <div className="link"><a href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.text}</a></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project__body_second-row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <Image className="desktop-image" style={{maxHeight: '70vh'}} src={project.imageSrc.desktopView} /> 
                                    {/* <img className="desktop-image" src={project.imageSrc.desktopView}></img> */}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="technologies-panel">
                                        {this.renderPanelList(project.stack)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    templateType3(props) {
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
                                            <div className="link"><a href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.text}</a></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project__body_second-row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <VideoPhoneFrame 
                                        className="project__video-frame"
                                        imgSrc={PhoneFrameImage}
                                        videoSrc={project.videoSrc}
                                    />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="technologies-panel">
                                        {this.renderPanelList(project.stack)}
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