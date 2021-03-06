import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

const PasswordRequestForm = ({ showModal, handleShow }) => {
  const onHandleShow = () => handleShow()

  return (
    <Modal show={showModal} onHide={onHandleShow} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Request a pass</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='passRequestForm'>
            <Form.Control type='text' placeholder='Name' required />
            <Form.Control type='email' placeholder='Email' required />
            <Form.Control type='email' placeholder='Confirm Email' required />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type='submit' variant='primary' onClick={onHandleShow}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PasswordRequestForm
