import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import PasswordRequestForm from '../components/PasswordRequestForm'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => {
    setShowModal(!showModal)
  } 

  return (
    <div className='flex-grow-1 text-center px-4'>
      <div
        className='d-flex flex-column justify-content-center align-items-center'
        style={{ minHeight: '70vh' }}
      >
        <h2>Lorem ipsum dolor sitamet,</h2>
        <h2>consecteur adipiscing</h2>
        <h6>Get aboard now speak with us!</h6>
        <Button type='button' variant='primary' className='my-1' onClick={handleShow}>
          Request a pass
        </Button>
        <PasswordRequestForm showModal={showModal} handleShow={handleShow} />
      </div>
    </div>
  )
}

export default HomePage