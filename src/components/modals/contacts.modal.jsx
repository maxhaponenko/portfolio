import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

import './contacts.modal.scss';

export default class ContactsModal extends React.Component {

    toggle = () => {
        this.props.toggle()
    }

    render() {

        const { isOpen } = this.props

        return (
            <div>
                <Modal toggle={this.toggle} isOpen={isOpen} className="center modal--default">
                    <ModalBody>
                        <div onClick={() => {
                            this.toggle()
                        }} className="close-icon"><i class="fas fa-times"></i></div>
                        <div className="contacts-block">
                            <div className="email">gaponenko.mm@gmail.com</div>
                            <div className="phone">+38 067 675 84 82</div>
                            <div className="social-block">
                                <i className="flaticon flaticon-facebook-logo" onClick={() => window.open('https://www.facebook.com/max.haponenko', '_blank')}></i>
                                <i className="flaticon flaticon-linkedin-letters" onClick={() => window.open('https://www.linkedin.com/in/max-haponenko/', '_blank')}></i>
                            </div>
                            <div className="available">Available every day from 10 am to 7 pm</div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}