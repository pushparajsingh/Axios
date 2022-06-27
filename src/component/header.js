import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/">Navbar</Navbar.Brand>
    <Nav className="me-auto">
    <Link to="/" className='h1'><span> Home</span></Link>
    <Link to="/service" className='h1'><span> Service</span></Link>
    <Link to="/About" className='h1'><span> About</span></Link>
    </Nav>
    </Container>
  </Navbar>
 
</>
    </div>
  )
}
