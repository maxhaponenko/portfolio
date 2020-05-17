import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import profileImage from '../../media/images/profile-image.jpg';
import Navigation from './navigation';
import ContactsModal from '../modals/contacts.modal';
import { mainSettings } from 'settings/main-settings';
import { publicPaths } from 'routes/paths';
import './pages-wrapper.scss';

class PagesWrapper extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstSurnameLetter: 'H',
            isModalOpen: false,
        }
    }

    switchFirstLetter() {
        if (this.state.firstSurnameLetter === 'H') {
            this.setState({firstSurnameLetter: 'G'})
        } else {
            this.setState({firstSurnameLetter: 'H'})
        }
    }

    toggleContactsModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {

        return (
            <Fragment>
                <Navigation toggleContacts={() => this.toggleContactsModal()} />
                <header>
                    <div className="profile-container">
                        <div className="profile">
                            <div className="profile__photo" onClick={() => this.props.history.push(publicPaths.main)}>
                                <img src={profileImage} alt="profile"/>
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
                    
                    {mainSettings.rate.show && (
                        <div className="rates-container">
                            {mainSettings.rate.hourlyRate && (
                                <div className="rates__hourly">
                                    <div className="rates__hourly--icon">
                                        <i className="far fa-clock"></i>
                                    </div>
                                    <div className="rates__hourly--text">
                                        <span>from</span> $9 / <span>hour</span>
                                    </div>
                                </div>
                            )}
                            {(mainSettings.rate.hourlyRate && mainSettings.rate.monthlyRate) && (
                                <div className="rates__divider">or</div>
                            )}
                            {mainSettings.rate.monthlyRate && (
                                <div className="rates__monthly">
                                    <div className="rates__monthly--icon">
                                        <i className="far fa-calendar-alt"></i>
                                    </div>
                                    <div className="rates__monthly--text">
                                        <span>from</span> $1500 <span>monthly</span>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    )}
                    
                </header>
                <div className="page-frame">
                    {this.props.children}
                </div>
                <footer>
                        <div className="copyright">Copyright 2020</div>
                        {/* <div className="contacts">
                            <div onClick={() => {
                                this.toggleContactsModal()
                            }}>contacts</div>
                        </div> */}
                        {/* <div className="designed" onClick={() => {
                            this.switchFirstLetter();
                            }}>designed by Max <span>{this.state.firstSurnameLetter}</span>aponenko</div> */}
                </footer>
                <ContactsModal isOpen={this.state.isModalOpen} toggle={() => this.toggleContactsModal()}/>
            </Fragment>
        )
    } 
}



export default withRouter(PagesWrapper)