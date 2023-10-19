import React from 'react'
import { Button, Card } from 'react-bootstrap'

function History() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <h1>Your watching Videos</h1>
    </div>
    <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/424037036.jpg?k=bbf192a709e0e698e17d8ab81cd9c5200d1c99c9333c0720228e14ba526e4501&o=&hp=1" />
      <Card.Body>
        <Card.Title className='d-flex flex-column justify-content-center align-items-center'><h4>Place Name</h4>
        <h5>name</h5>

       <div className='d-flex flex-row justify-content-between align-items-center'>
         <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
  
       </div>
        </Card.Title>
        
        
      </Card.Body>
    </Card>

    </>
  )
}

export default History