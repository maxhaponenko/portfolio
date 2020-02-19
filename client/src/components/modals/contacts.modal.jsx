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
                            <div className="phone">+380676758482</div>
                            <div className="social-block">
                                <i className="flaticon flaticon-facebook-logo"></i>
                                <i className="flaticon flaticon-linkedin-letters"></i>
                            </div>
                            <div className="available">Avaliable every day from 10 am to 7 pm (+3 UDT)</div>
                        </div>
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        )
    }

}