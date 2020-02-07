import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';

export default class ContactsModal extends React.Component {

    toggle = () => {
        this.props.toggle()
    }

    render() {

        const { isOpen } = this.props

        return (
            <div>
                <Modal toggle={this.toggle} isOpen={isOpen}>
                    <ModalBody>
                        Observe the "Open" button. It will be focused after close when "returnFocusAfterClose" is true and will not be focused if "returnFocusAfterClose" is false.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}