import { Button, Modal } from 'react-bootstrap'

const MessageModal = ({ modalState, modalHandler, messageHeader, message }) => {
  return (
    <Modal
      show={modalState}
      onHide={modalHandler}
      animation={false}
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body className='text-center'>
        <p className='h4'>{messageHeader}</p>
        <p className='lead'>{message}</p>
        <Button type='button' variant='primary' onClick={modalHandler}>
          OK
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default MessageModal
