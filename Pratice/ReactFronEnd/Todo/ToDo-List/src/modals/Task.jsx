import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const Task = () => {
    return (
        <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          Modal body text goes here.
        </ModalBody>
      </Modal>
    );
};

export default Task;