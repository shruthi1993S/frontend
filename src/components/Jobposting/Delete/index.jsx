/* eslint-disable react/prop-types */
// src/components/DeleteJobPosting.js

import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const DeleteJobPosting = ({ deleteFunction, show, handleClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteFunction);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this Job Posting?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteJobPosting;
