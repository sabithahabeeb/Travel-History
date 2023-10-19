import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Corosel from '../Components/Corosel'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>

      <Corosel />
      <div  className='d-flex justify-content-center align-items-center'>
        <Link style={{textDecoration:'none'}} className=' rounded mt-3' to={'/view'}>     <h1 style={{fontSize:'100px',fontFamily:'inherit'}}>Travel List</h1> </Link>
      </div>
    </>
  )
}

export default Home