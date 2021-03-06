import React from 'react';
import { animatePosition } from '../../services/animation';
import NavItems from './nav-items';

class Navigation extends React.Component {
    state = {
        navigationOpen: false,
        navButtonDisabled: false,
        navigationIsHidden: false,
        hiddenNavigationIsOpened: false,
        pages: {
            main: 'main',
            skills: 'skills',
            experience: 'experience',
            projects: 'projects',
            education: 'education'
        },
        activePage: 'main',
        firstSurnameLetter: 'H'
    }

    pageName = React.createRef()

    changePage = (name) => {
        this.setState({
            activePage: name
        })
    }

    checkPageName = (path) => {
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

    togglePageName = (action) => {
        if (action === 'hide') {
            animatePosition(this.pageName, 'top', '33px')
        }
        if (action === 'show') {
            animatePosition(this.pageName, 'top', '0px')
        }
    }

    componentDidMount() {
        this.checkPageName(window.location.pathname);
        document.addEventListener('scroll', this.calculateNavigationMode.bind(this))
        window.addEventListener('resize', this.calculateNavigationMode.bind(this))
        this.calculateNavigationMode()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            this.checkPageName(window.location.pathname)
        }
        this.state.navigationOpen ? this.togglePageName('hide') : this.togglePageName('show')
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.calculateNavigationMode)
        window.removeEventListener('resize', this.calculateNavigationMode)
    }

    calculateNavigationMode = () => {
        if (window.innerWidth < 500 || (window.scrollY > 50 && window.innerWidth < 500 && !this.state.navigationIsHidden)) {
            this.setState({
                navigationIsHidden: true
            }, this.closeNavigationMenu())
        } else if (window.scrollY <= 50 && window.innerWidth >= 500 && this.state.navigationIsHidden) {
            this.setState({
                navigationIsHidden: false
            })
        }
    }

    handleNavButtonClick = () => {
        if (!this.state.navButtonDisabled && !this.state.navigationIsHidden) {
            this.setState({
                navigationOpen: !this.state.navigationOpen,
                navButtonDisabled: true
            }, this.enableNavButton(200))
        } else if (!this.state.navButtonDisabled && this.state.navigationIsHidden) {
            this.setState({
                navigationOpen: !this.state.navigationOpen,
                navButtonDisabled: true,
                hiddenNavigationIsOpened: !this.state.hiddenNavigationIsOpened
            }, this.enableNavButton(200))
        }
    }

    closeNavigationMenu = () => {
        this.setState({
            navigationOpen: false,
            hiddenNavigationIsOpened: false
        })
    }

    enableNavButton = (timeout) => {
        setTimeout(() => {
            this.setState({
                navButtonDisabled: false
            })
        }, timeout)
    }


    render() {

        const getNavigationStyles = () => {
            const hiddenNavStyles = {
                right: '-133px'
            }
            const notHiddenNavStyles = {
                right: '0px'
            }
            if (this.state.navigationIsHidden && !this.state.hiddenNavigationIsOpened) {
                return hiddenNavStyles
            } else {
                return notHiddenNavStyles
            }
        }

        return (
            <nav style={getNavigationStyles()}>
                <div className="toggler" style={this.state.navigationOpen ? { display: 'block' } : { display: 'none' }} onClick={this.closeNavigationMenu}></div>
                <div className="nav-page-name" style={this.state.navigationIsHidden ? { opacity: 0 } : { opacity: 1 }} ref={this.pageName}>
                    <span>{this.state.activePage}</span> page
                </div>
                <button
                    className={`nav-button ${this.state.navigationOpen ? 'active' : ''}`}
                    onClick={this.handleNavButtonClick}
                >
                    <i className="fas fa-sort-amount-down-alt nav-button__icon"></i>
                    <div className="nav-button__text">Navigate</div>
                </button>

                <NavItems
                    openMenu={this.state.navigationOpen}
                    closeMenuCallback={this.closeNavigationMenu}
                    toggleContacts={this.props.toggleContacts}
                />
            </nav>
        )
    }
}

export default Navigation