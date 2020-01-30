import React from 'react';
import { animatePosition } from '../../services/animation';
import NavItems from './nav-items';

class Navigation extends React.Component {
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
            firstSurnameLetter: 'H'
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
            <nav>
                
                <div className="toggler" style={this.state.navigationOpen ? { display: 'block' } : { display: 'none' }} onClick={() => {this.setState({navigationOpen: !this.state.navigationOpen})}}></div>
                
                <div className="nav-page-name" ref={ref => this.pageName = ref}>
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
                    }}
                >
                    <i className="fas fa-sort-amount-down-alt nav-button__icon"></i>
                    <div className="nav-button__text">Navigate</div>
                </button>

                <NavItems
                    openMenu={this.state.navigationOpen}
                    closeMenuCallback={() => this.closeNavigationMenu()}
                />
            </nav>
        )
    }
}

export default Navigation