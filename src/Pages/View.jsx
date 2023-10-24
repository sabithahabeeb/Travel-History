import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Vedio from '../Components/Vedio'

function View() {
  const [uploadVideoServerResponse, setUploadVideoServerResponse] = useState({})
  return (
    <>
      <div className="d-flex justify-content-around align-items-center">
        <div style={{ textDecoration: 'none', fontSize: '40px', fontWeight: '600' }}><Add setUploadVideoServerResponse={setUploadVideoServerResponse} /></div>
        <div className='d-flex flex-column'>
          <Link className='mb-3 border p-2 mt-2 rounded' to={'/history'} style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '700' }}> Watch History <i style={{color:'lightblue',fontSize:'100px m-3 p-3' }} className="fa-solid fa-arrow-right fa-beat "> </i></Link>
          <Link className='border p-2 rounded' to={'/selected'} style={{ textDecoration: 'none', fontSize: '20px', fontWeight: '700' }}> Selected Videos <i style={{color:'lightblue',fontSize:'100px m-3 p-3' }} className="fa-solid fa-arrow-right fa-beat "> </i></Link>
        </div>
      </div>

      <Row className='container w-100 mt-5 mb-5 align-items-center justify-content-between'>
        <Col lg={9}>
          <Vedio uploadVideoServerResponse={uploadVideoServerResponse} />
        </Col>
        <Col lg={2} className='ms-2'>
          <img className='rounded' height={'400px'} src="https://i.gifer.com/I5Wi.gif" alt="" />
        </Col>
      </Row>
    <div className='border shadow'>
        <h1 className='p-2 m-5' style={{color:'crimson',textAlign:'center',fontWeight:'700'}}>Customer Service Reviews</h1>
        <div className='d-flex w-100 flex-row align-items-center justify-content-between m-5 p-5'>
          <div className="message  d-flex flex-column align-items-center justify-content-between border shadow p-3 m-2">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://as1.ftcdn.net/v2/jpg/00/86/50/90/1000_F_86509002_0c2J71EBWrPOAYATDgVVSGbpXZQZzcKq.jpg" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
          <div className="message  d-flex flex-column align-items-center justify-content-between  border shadow m-2 p-3">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://as1.ftcdn.net/v2/jpg/02/85/35/12/1000_F_285351282_qoH7nhi5lgKLzWAkJScnVejfQy66FGJw.jpg" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span  className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
          <div className="message  d-flex flex-column align-items-center justify-content-between  border shadow m-2 p-3">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://previews.123rf.com/images/oleksiispesyvtsev/oleksiispesyvtsev1910/oleksiispesyvtsev191000278/133013013-portrait-of-a-cute-two-year-old-toddler-girl-in-pink-balancing-on-rocks-in-the-park.jpg?fj=1" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star"></span>
              <span style={{ color: 'orange' }} className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
          <div className="message  d-flex flex-column align-items-center justify-content-between  border shadow m-2 p-3">
            <img height={'150px'} width={'150px'} style={{ borderRadius: '50%' }} src="https://as2.ftcdn.net/v2/jpg/01/15/79/77/500_F_115797755_kyaWoVqXcdmkXlNSGB0cuSvMy6oXAnuk.jpg" alt="" />
            <div className='d-flex flex-row align-items-center justify-content-center p-3'>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span style={{ color: 'orange' }} className="fa fa-star "></span>
              <span  className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem voluptatum earum iure, </p>
          </div>
        </div>
    </div>
    </>
  )
}

export default View