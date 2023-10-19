import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/424037036.jpg?k=bbf192a709e0e698e17d8ab81cd9c5200d1c99c9333c0720228e14ba526e4501&o=&hp=1" />
      <Card.Body>
        <Card.Title className='d-flex flex-column justify-content-center align-items-center'><h4>Place Name</h4>
        <h5>name</h5>

       <div className='d-flex flex-row justify-content-between align-items-center'>
          <Button variant="primary">selected</Button>
         <button className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
  
       </div>
        </Card.Title>
        
        
      </Card.Body>
    </Card>


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src="https://www.youtube.com/embed/nkwLjnragtw?autoplay=1" title="BEAUTY OF MANALI | manali cinematic travel video  |  travel india" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard