import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Vedio from '../Components/Vedio'

function View() {
  return (
    <>
    <div className="d-flex justify-content-around align-items-center">
      <div  style={{textDecoration:'none',fontSize:'40px',fontWeight:'600'}}><Add/></div>
<div className='d-flex flex-column'>
  <Link className='mb-3' to={'/history'} style={{textDecoration:'none',fontSize:'20px',fontWeight:'600'}}> Watch History</Link>
  <Link to={'/selected'} style={{textDecoration:'none',fontSize:'20px',fontWeight:'600'}}> Selected Videos</Link>
</div>
    </div>

<Row className='container w-100 mt-5 mb-5 align-items-center justify-content-between'>
  <Col lg={9}>
  <Vedio/>
  </Col>
  <Col lg={2} className='ms-2'>
  <img className='rounded' height={'400px'} src="https://i.gifer.com/I5Wi.gif" alt="" />
  </Col>
</Row>
    </>
  )
}

export default View