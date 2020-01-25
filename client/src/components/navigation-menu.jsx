import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { animatePosition } from '../services/animation';

export default class NavigationMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsOpenPosition: {
                item1: false,
                item2: false,
                item3: false,
                item4: false
            }
        };
        this.openSpeedSettings = [ 50, 100, 150, 250 ];
        this.closeSpeedSettings = [ 200, 150, 100, 50 ]
    }

    menuItems(action) {
        for (let i = this.openSpeedSettings.length - 1; i >= 0; i--) {
            setTimeout(() => {
                this.setState({
                    ...this.state.itemsOpenPosition,
                    itemsOpenPosition: {
                        [`item${i+1}`] : action ==='open' ? true : false
                    }
                }, () => {
                    let moveSize = action === 'open' ? '50px' : '-310px'
                    if (i+1 === 1) {
                        animatePosition(this.item1, 'right', moveSize)
                    } else if (i+1 === 2) {
                        animatePosition(this.item2, 'right', moveSize)
                    } else if (i+1 === 3) {
                        animatePosition(this.item3, 'right', moveSize)
                    } else if (i+1 === 4) {
                        animatePosition(this.item4, 'right', moveSize)
                    }
                }) 
            }, action === 'open' ? this.openSpeedSettings[i] : this.closeSpeedSettings[i])
            
        }
    };
    

    componentDidUpdate(prevProps) {
        if ((this.props.openMenu !== prevProps.openMenu) && this.props.openMenu === true) {
            this.menuItems('open')
        } else if ((this.props.openMenu !== prevProps.openMenu) && this.props.openMenu === false) {
            this.menuItems('close')
        }
    }

    render() {
        return (
            <div className={`nav-menu`}>
                <NavLink exact to="/" ref={ref => this.item1 = ref} className={`nav-menu__item`}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Main</div>
                </NavLink>
                <NavLink to="/skills" ref={ref => this.item2 = ref} className={`nav-menu__item`}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Skills</div>
                </NavLink>
                <NavLink to="/experience" ref={ref => this.item3 = ref} className={`nav-menu__item`}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Experience</div>
                </NavLink>
                <NavLink to="/projects" ref={ref => this.item4 = ref} className={`nav-menu__item`}>
                    <span className="pointer"></span>
                    <div className="nav-menu__item--text">Projects</div>
                </NavLink>
                
            </div>
            
        )
    }
}