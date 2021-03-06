import React from 'react'
import { Container, Button } from 'react-bootstrap'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Container>
        <span>Lorem ipsum dolor sitamet,</span>
        <span>consecteur adipiscing</span>
        <span>Get aboard now speak with us!</span>
        <Button type='button' variant='primary'>
          Request a pass
        </Button>
      </Container>
    </div>
  )
}

export default HomePage
