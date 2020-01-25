import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import profileImage from '../media/images/profile-image.jpg';

class PagesWrapper extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            navigationOpen: false
        }
        
    }

    render() {
        // const { navigationOpen } = this.state
        // console.log(navigationOpen)
        return (
            <Fragment>
                <nav>
                    <button className={`nav-button ${this.state.navigationOpen ? 'active' : ''}`} onClick={() => {
                        this.setState({
                            navigationOpen: !this.state.navigationOpen
                        })
                    }}>
                        <i className="fas fa-sort-amount-down-alt nav-button__icon"></i>
                        <div className="nav-button__text">Navigate</div>
                    </button>
                    <NavigationMenu openMenu={this.state.navigationOpen}/>
                </nav>
                <header>
                    <div className="profile-container">
                        <div className="profile">
                            <div className="profile__photo">
                                <img src={profileImage}></img>
                            </div>
                            <div className="profile__text">
                                <div className="profile__text--name">
                                    Max Haponenko
                                </div>
                                <div className="profile__text--role">
                                    Frontend developer
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rates-container">
                        <div className="rates__hourly">
                            <div className="rates__hourly--icon"> 
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="rates__hourly--text">
                                <span>from</span> $12 / <span>hour</span>
                            </div>
                        </div>
                        <div className="rates__divider">or</div>
                        <div className="rates__monthly">
                            <div className="rates__monthly--icon">
                                <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="rates__monthly--text">
                                <span>from</span> $1500 <span>monthly</span>
                            </div>
                        </div>
                    </div>
                </header>

                {this.props.children}

                <footer>

                </footer>
            </Fragment>
        )
    } 
}

class NavigationMenu extends Component {

    render() {

        return (
            <div className={`nav-menu ${this.props.openMenu ? 'open' : ''}`}>
                <NavLink to="/" className="nav-menu__item">
                    <div className="nav-menu__item--text">Main</div>
                </NavLink>
                <NavLink to="/" className="nav-menu__item">
                    <div className="nav-menu__item--text">Skills</div>
                </NavLink>
                <NavLink to="/" className="nav-menu__item">
                    <div className="nav-menu__item--text">Experience</div>
                </NavLink>
                <NavLink to="/" className="nav-menu__item">
                    <div className="nav-menu__item--text">Projects</div>
                </NavLink>
                
            </div>
            
        )
    }
}

export default withRouter(PagesWrapper)