import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const PasswordRequestForm = ({ showModal, handleShow }) => {
  const onHandleShow = () => handleShow()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      confirmEmail: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim('Invalid first character')
        .strict(true)
        .min(3)
        .matches(/^[a-zA-Z\s.]*$/, 'Invalid input character')
        .max(30, 'Must be 30 characters or less')
        .required('Field is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Field is Required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Email must match')
        .required('Field is required'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
      handleShow()
    },
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Modal show={showModal} onHide={onHandleShow} animation={false}>
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
              <div className='text-danger'>{formik.errors.name}</div>
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
              <div className='text-danger'>{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group controlId='confirmEmail'>
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Confirm Email'
              {...formik.getFieldProps('confirmEmail')}
            />
            {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
              <div className='text-danger'>{formik.errors.confirmEmail}</div>
            ) : null}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' onClick={formik.handleSubmit} variant='primary'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  )
}

export default PasswordRequestForm
