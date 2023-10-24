import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Corosel from '../Components/Corosel'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
    <h1 style={{textAlign:'center',fontFamily:'initial',fontSize:'60PX',fontWeight:'700'}} className=''>PLAN YOURE TRIP</h1>

      <Corosel />
      <div  className='d-flex justify-content-center align-items-center'>
        <Link  style={{textDecoration:'none',backgroundColor:'bisque'}} className=' rounded mt-3 m-5 p-2 d-flex flex-row justify-content-center align-items-center border' to={'/view'}>     <h1 style={{fontSize:'50px',color:'green',fontFamily:'inherit',fontWeight:'700'}}>Travel List</h1> <i style={{color:'green',fontSize:'100px m-3 p-3' }} className="fa-solid fa-arrow-right fa-beat "> </i></Link>
      </div>

       <h3 style={{fontSize:'50px'}} className=' p-2'>Discover our trip planner</h3>
      <div className='d-flex flex-row justify-content-center align-items-center  p-2 shadow'>
        <img className='m-5 p-5' height={'500px'} src="https://scth.scene7.com/is/image/scth/gallery_05:crop-375x210?defaultImage=gallery_05&wid=580&hei=324" alt="" />
        <div style={{fontSize:'20px'}}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae aspernatur omnis voluptates necessitatibus assumenda perspiciatis cumque ratione blanditiis, accusamus perferendis quia facere commodi nobis libero ab. Dolor, id enim!</p>
        <button className='btn btn-success m-5 p-2 rounded'>Learn more</button></div>
      </div>

      <h3 style={{fontSize:'50px'}} className=' p-2'>Useful information</h3>
      <div className='d-flex flex-row justify-content-center align-items-center  p-3 shadow'>
        <img className='m-5 p-5' height={'500px'} src="https://scth.scene7.com/is/image/scth/transportation-plan-your-trip:crop-375x210?defaultImage=transportation-plan-your-trip&wid=580&hei=324" alt="" />
        <div className='d-flex flex-column justify-content-center align-items-center' style={{fontSize:'20px'}}>
          <span className='p-3'style={{color:'gray'}}>Getting Here & Around</span>
          <h2 className='p-3'style={{color:'crimson'}}>Transportation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae aspernatur omnis voluptates necessitatibus assumenda perspiciatis cumque ratione blanditiis, accusamus perferendis quia facere commodi nobis libero ab. Dolor, id enim!</p>
        <button style={{backgroundColor:'crimson',color:'white'}} className='btn  m-5 p-2 rounded'>Learn more</button></div>
      </div>

      <div className='d-flex flex-row justify-content-center align-items-center  p-3 shadow'>
        
        <div className='d-flex flex-column justify-content-center align-items-center' style={{fontSize:'20px'}}>
          <span className='p-3'style={{color:'gray'}}>Buckle up</span>
          <h2 className='p-3'style={{color:'crimson'}}>Road Trip Guide</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae aspernatur omnis voluptates necessitatibus assumenda </p>
        <button style={{backgroundColor:'crimson',color:'white'}} className='btn  m-5 p-2 rounded'>Learn more</button></div>
        <img className='m-5 p-5' height={'500px'} src="https://scth.scene7.com/is/image/scth/getting_around_01_1920x1080:crop-375x210?defaultImage=getting_around_01_1920x1080&wid=580&hei=324" alt="" />
      </div>


      <div className='d-flex flex-row justify-content-center align-items-center  p-3 shadow'>
        <img className='m-5 p-5' height={'500px'} src="https://www.southernliving.com/thmb/0iOYtE7Dvm7C7OkGDMrbC92xv2g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimagesbc-9472bf0d011f4259acbdcbe3c44a7a21.jpg" alt="" />
        <div className='d-flex flex-column justify-content-center align-items-center' style={{fontSize:'20px'}}>
          <span className='p-3'style={{color:'gray'}}>Getting Here & Around</span>
          <h2 className='p-3'style={{color:'crimson'}}>Your best Travel holiday awaits</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae aspernatur omnis voluptates necessitatibus assumenda perspiciatis c</p>
        <button style={{backgroundColor:'crimson',color:'white'}} className='btn  m-5 p-2 rounded'>Learn more</button></div>
      </div>
    </>
  )
}

export default Home