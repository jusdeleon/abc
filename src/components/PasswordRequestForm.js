import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import Loader from './Loader'
import { passApi } from '../api/api'
import { passValidationSchema } from '../validator/passValidationSchema'

const PasswordRequestForm = ({ showModal, handleShow, handleSuccessModal }) => {
  const [loading, setLoading] = useState(false)
  const [apiErrors, setApiErrors] = useState({})

  const onHandleShow = () => handleShow()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      email_confirmation: '',
    },
    validationSchema: passValidationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true)
      passApi
        .post('/', values)
        .then((res) => {
          setLoading(false)
          onHandleShow()
          handleSuccessModal()
          resetForm()
          setApiErrors({})
        })
        .catch((error) => {
          setLoading(false)
          setApiErrors(error.response.data)
        })
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Modal
        show={showModal}
        onHide={onHandleShow}
        animation={false}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Request a pass</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name'
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className='d-inline-block mt-1 text-danger'>{formik.errors.name}</span>
            ) : null}
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email'
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className='d-inline-block mt-1 text-danger'>{formik.errors.email}</span>
            ) : null}
          </Form.Group>
          <Form.Group controlId='email_confirmation'>
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Confirm Email'
              {...formik.getFieldProps('email_confirmation')}
            />
            {formik.touched.email_confirmation &&
            formik.errors.email_confirmation ? (
              <span className='d-inline-block mt-1 text-danger'>
                {formik.errors.email_confirmation}
              </span>
            ) : null}
          </Form.Group>
          {Object.keys(apiErrors).length > 0 ? (
            <p className='text-danger'>
              Error from server: {apiErrors.message}
            </p>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button
            type='submit'
            onClick={formik.handleSubmit}
            variant='primary'
            disabled={loading ? true : false}
          >
            {loading ? (
              <>
                <Loader /> Loading...
              </>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  )
}

export default PasswordRequestForm
