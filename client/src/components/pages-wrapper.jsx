import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import profileImage from '../media/images/profile-image.jpg';
import NavigationMenu from './navigation-menu';
import { animatePosition } from '../services/animation';

class PagesWrapper extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            navigationOpen: false,
            navButtonDisabled: false,
            pages: {
                main: 'main',
                skills: 'skills',
                experience: 'experience',
                projects: 'projects'
            },
            activePage: 'main',
        }
    }

    changePage = (name) => {
        this.setState({
            activePage: name
        })
    }

    checkPageName(path) {
        if (path === '/') {
            this.changePage('main')
        } else if (path === '/skills') {
            this.changePage('skills')
        } else if (path === '/experience') {
            this.changePage('experience')
        } else if (path === '/projects') {
            this.changePage('projects')
        } else if (path === '/education') {
            this.changePage('education')
        }
    }

    togglePageName(action) {
        if (action === 'hide') {
            animatePosition(this.pageName, 'top', '33px')
        } 
        if (action === 'show') {
            animatePosition(this.pageName, 'top', '0px')
        }
        
    }

    componentDidMount() {
        this.checkPageName(window.location.pathname);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.checkPageName(window.location.pathname)
        }
        this.state.navigationOpen ? this.togglePageName('hide') : this.togglePageName('show')
        
    }

    closeNavigationMenu = () => {
        this.setState({
            navigationOpen: false
        })
    }

    enableNavButton(timeout) {
        setTimeout(() => {
            this.setState({
                navButtonDisabled: false
            })
        }, timeout)
    }


    render() {

        

        return (
            <Fragment>
                
                <nav>
                    <div className="toggler" style={this.state.navigationOpen ? { display: 'block' } : { display: 'none' }} onClick={() => {
                        this.setState({
                            navigationOpen: !this.state.navigationOpen
                        })
                    }}></div>
                    <div className="nav-page-name" ref={ ref => this.pageName = ref}>
                        <span>{this.state.activePage}</span> page
                    </div>
                    <button
                        className={`nav-button ${this.state.navigationOpen ? 'active' : ''}`}
                        onClick={() => {
                            if (!this.state.navButtonDisabled) {
                                this.setState({
                                    navigationOpen: !this.state.navigationOpen,
                                    navButtonDisabled: true
                                }, this.enableNavButton(200))
                            }
                        }}>
                        <i className="fas fa-sort-amount-down-alt nav-button__icon"></i>
                        <div className="nav-button__text">Navigate</div>
                    </button>
                    
                    <NavigationMenu openMenu={this.state.navigationOpen} closeMenuCallback={() => this.closeNavigationMenu()} />
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



export default withRouter(PagesWrapper)