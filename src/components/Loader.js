import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      variant='light'
      size='sm'
      aria-hidden='true'
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
