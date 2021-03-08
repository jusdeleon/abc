import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import PasswordRequestForm from '../components/PasswordRequestForm'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)

  const handleShow = () => setShowModal(!showModal)
  

  const handleSuccessModal = () => setSuccessModal(!successModal)

  return (
    <div className='flex-grow-1 text-center px-4'>
      <div
        className='d-flex flex-column justify-content-center align-items-center'
        style={{ minHeight: '70vh' }}
      >
        <h2>Lorem ipsum dolor sitamet,</h2>
        <h2>consecteur adipiscing</h2>
        <h6>Get aboard now speak with us!</h6>
        <Button
          type='button'
          variant='primary'
          className='my-1'
          onClick={handleShow}
        >
          Request a pass
        </Button>
        <PasswordRequestForm
          handleSuccessModal={handleSuccessModal}
          showModal={showModal}
          handleShow={handleShow}
        />
        {successModal ? (
          <Modal
            show={successModal}
            onHide={handleSuccessModal}
            animation={false}
            aria-labelledby='contained-modal-title-vcenter'
            centered
          >
            <Modal.Body className='text-center'>
              <p>Thank you!</p>
              <p>Please keep an eye for your first class ticket on you
              email</p>
              <Button
                type='button'
                variant='primary'
                onClick={handleSuccessModal}
              >
                OK
              </Button>
            </Modal.Body>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default HomePage
