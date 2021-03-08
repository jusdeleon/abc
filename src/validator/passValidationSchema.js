import * as Yup from 'yup'

export const passValidationSchema = Yup.object({
    name: Yup.string()
      .trim('Invalid first character')
      .strict(true)
      .min(3)
      .matches(/^[a-zA-Z\s.]*$/, 'Invalid input character')
      .max(30, 'Must be 30 characters or less')
      .required('Field is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Field is required'),
    email_confirmation: Yup.string()
      .oneOf([Yup.ref('email'), null], 'Email must match')
      .required('Field is required'),
  })