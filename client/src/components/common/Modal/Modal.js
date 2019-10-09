import React from 'react';
import {Modal as ModalStrap, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

class Modal extends React.Component {
    state = {
        modal: false
    };

    componentWillReceiveProps(nextProps) {
        const {setModal} = nextProps;
        setModal ? this.setState({modal: setModal}) : this.setState({modal: setModal})
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    };

    render() {
        const {modal} = this.state;
        const {toggle} = this;
        const {headerContent, bodyContent, confirmButton, confirmHandling} = this.props;
        return (
            <div>
                <ModalStrap isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{headerContent}</ModalHeader>
                    <ModalBody>
                        {bodyContent}
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="danger" onClick={confirmHandling}>{confirmButton}</Button>{' '}
                        <Button variant="info" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </ModalStrap>
            </div>
        )
    }
}

Modal.propTypes = {
    setModal: PropTypes.bool.isRequired,
    headerContent: PropTypes.string.isRequired,
    bodyContent: PropTypes.string.isRequired,
    confirmButton: PropTypes.string.isRequired,
    confirmHandling: PropTypes.func.isRequired
};

export default Modal;
