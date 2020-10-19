import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { animatePosition } from '../../services/animation';
import { publicPaths } from '../../routes/paths';

class NavItems extends Component {
    
    state = {
        itemsIsOpen: {
            item1: false,
            item2: false,
            item3: false,
            item4: false,
            item5: false,
            item6: false
        }
    };
    openTimeMap = [ 75, 100, 150, 250, 300, 320 ];
    closeTimeMap = [ 200, 150, 100, 75, 50, 40 ]

    menuBlock = React.createRef()
    item1 = React.createRef()
    item2 = React.createRef()
    item3 = React.createRef()
    item4 = React.createRef()
    item5 = React.createRef()
    item6 = React.createRef()

    menuAction(action) {
        const timeMap = action === 'open' ? this.openTimeMap : this.closeTimeMap
        timeMap.forEach((item, i )=> {
            setTimeout(() => {
                this.setState({
                    itemsIsOpen: {
                        ...this.state.itemsIsOpen,
                        [`item${i+1}`] : action ==='open' ? true : false
                    }
                }, () => {
                    let moveItemSize = action === 'open' ? '50px' : '-300px'
                    let moveMenuBlockSize = action === 'open' ? '0px' : '-300px'
                    let itemNumber = i + 1
                    debugger
                    if (itemNumber === 1) {
                        animatePosition(this.menuBlock, 'right', moveMenuBlockSize)
                        animatePosition(this.item1, 'right', moveItemSize)
                    } else {
                        animatePosition(this[`item${itemNumber}`], 'right', moveItemSize)
                    } 
                }) 
            }, item)
        })
    };

    componentDidUpdate(prevProps) {
        if (this.props.openMenu === true && prevProps.openMenu === false) {
            this.menuAction('open')
        } else if (this.props.openMenu === false && prevProps.openMenu === true) {
            this.menuAction('close')
        }
    }

    handleNavigationAction(pageName) {
        let path = this.props.history.location.pathname;
        if (!path.includes(pageName)){
            setTimeout(() => this.props.closeMenuCallback(), 30)
        } else if (path === pageName) {
            return false 
        } else {
            setTimeout(() => this.props.closeMenuCallback(), 30)
        }
    }

    render() { 
        return (
            <div ref={this.menuBlock}  className={`nav-menu`}>
                <NavLink exact to={publicPaths.main} ref={this.item1} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.main)} >
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Main</div>
                </NavLink>
                <NavLink to={publicPaths.projects} ref={this.item2} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.projects)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Projects</div>
                </NavLink>
                <NavLink to={publicPaths.skills} ref={this.item3} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.skills)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Skills<span>Technologies, Frameworks, Libs, Tools</span></div>
                </NavLink>
                <NavLink to={publicPaths.experience} ref={this.item4} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.experience)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Experience <span>Timeline and projects I was involved in</span></div>
                </NavLink>
                <NavLink to={publicPaths.education} ref={this.item5} className={`nav-menu__item`} onClick={() => this.handleNavigationAction(publicPaths.education)}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Education</div>
                </NavLink>
                <div ref={this.item6} className={`nav-menu__item`} onClick={() => this.props.toggleContacts()}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Contacts</div>
                </div>
            </div>
        )
    }
}

export default withRouter(NavItems)