import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form, ModalHeader } from 'reactstrap';
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
                    <ModalBody style={{minHeight: '400px'}}>
                        <div className="contacts-block">
                            <div className="email">gaponenko.mm@gmail.com</div>
                            <div className="phone">+380676758482</div>
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