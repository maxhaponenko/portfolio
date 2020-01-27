import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { animatePosition } from '../services/animation';
import { publicPaths } from '../routes/paths';

class NavigationMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsOpenPosition: {
                item1: false,
                item2: false,
                item3: false,
                item4: false,
                item5: false
            }
        };
        this.openSpeedSettings = [ 50, 100, 150, 250, 300 ];
        this.closeSpeedSettings = [ 200, 150, 100, 50, 25 ]
    }

    menuAction(action) {
        for (let i = this.openSpeedSettings.length - 1; i >= 0; i--) {
            setTimeout(() => {
                this.setState({
                    ...this.state.itemsOpenPosition,
                    itemsOpenPosition: {
                        [`item${i+1}`] : action ==='open' ? true : false
                    }
                }, () => {
                    let moveItemSize = action === 'open' ? '50px' : '-300px'
                    let moveMenuBlockSize = action === 'open' ? '0px' : '-300px'
                    if (i+1 === 1) {
                        animatePosition(this.menuBlock, 'right', moveMenuBlockSize)
                        animatePosition(this.item1, 'right', moveItemSize)
                    } else if (i+1 === 2) {
                        animatePosition(this.item2, 'right', moveItemSize)
                    } else if (i+1 === 3) {
                        animatePosition(this.item3, 'right', moveItemSize)
                    } else if (i+1 === 4) {
                        animatePosition(this.item4, 'right', moveItemSize)
                    } else if (i+1 === 5) {
                        animatePosition(this.item5, 'right', moveItemSize)
                    }
                }) 
            }, action === 'open' ? this.openSpeedSettings[i] : this.closeSpeedSettings[i])
            
        }
    };
    

    componentDidUpdate(prevProps) {
        if ((this.props.openMenu !== prevProps.openMenu) && this.props.openMenu === true) {
            this.menuAction('open')
        } else if ((this.props.openMenu !== prevProps.openMenu) && this.props.openMenu === false) {
            this.menuAction('close')
        }
    }

    handleNavigationAction(pageName) {
        let path = this.props.history.location.pathname;
        if (!path.includes(pageName)){
            setTimeout(() => {
                this.props.closeMenuCallback()
            }, 250)
        } else if (path === pageName) {
            return false 
        } else {
            setTimeout(() => {
                this.props.closeMenuCallback()
            }, 250)
        }
    }

    render() { 
        return (
            <div ref={ref => this.menuBlock = ref}  className={`nav-menu`}>
                <NavLink exact to="/" ref={ref => this.item1 = ref} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.main)} >
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Main</div>
                </NavLink>
                <NavLink to="/projects" ref={ref => this.item2 = ref} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.projects)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Projects</div>
                </NavLink>
                <NavLink to="/skills" ref={ref => this.item3 = ref} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.skills)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Skills<span>Technologies, Frameworks, Libs, Tools</span></div>
                    
                </NavLink>
                <NavLink to="/experience" ref={ref => this.item4 = ref} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.experience)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Experience <span>Timeline and projects I was involved in</span></div>
                </NavLink>
                <NavLink to="/education" ref={ref => this.item5 = ref} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.education)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Education</div>
                </NavLink>
                
            </div>
            
        )
    }
}

export default withRouter(NavigationMenu)