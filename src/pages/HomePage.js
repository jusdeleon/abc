import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import PasswordRequestForm from '../components/PasswordRequestForm'
import MessageModal from '../components/MessageModal'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)

  const handleShow = () => setShowModal(!showModal)
  const handleSuccessModal = () => setSuccessModal(!successModal)

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center'>
        <div className='p-4'>
          <h2>Lorem ipsum dolor sitamet</h2>
          <h2>consecteur adipiscing</h2>
          <p className='lead'>Get aboard now speak with us!</p>
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
        </div>
      </div>
      {successModal && (
        <MessageModal
          modalState={successModal}
          modalHandler={handleSuccessModal}
          messageHeader='Thank you!'
          message='Please keep an eye for your first class ticket on your email.'
        />
      )}
    </>
  )
}

export default HomePage
