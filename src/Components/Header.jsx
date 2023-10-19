import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
 <Navbar className="bg-info">
        <Container>
          <Navbar.Brand  >
         <Link className='fw-bolder' to={'/'} style={{color:'white'}}>
            <i className="fa-solid fa-globe fa-beat-fade"></i>
              Travel
         </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header