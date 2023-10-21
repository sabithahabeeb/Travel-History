import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deleteAvideo } from '../services/allAPI';

function VideoCard({displayData,setDeleteAVideo}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // deleting a video
  const handleDelete = async (id)=>{
    // make api call
    const response = await deleteAvideo(id)
    setDeleteAVideo(true)
  }
  return (
    <>
    {
      displayData &&
      <Card className='mb-5' >
      <Card.Img onClick={handleShow} style={{height:'180px'}} variant="top" src={displayData?.url} />
      <Card.Body>
        <Card.Title className='d-flex flex-column justify-content-center align-items-center'><h4>{displayData?.caption}</h4>
        <h5>{displayData?.name}</h5>

       <div className='d-flex flex-row justify-content-between align-items-center'>
          <Button variant="primary">selected</Button>
         <button onClick={()=>handleDelete(displayData?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
  
       </div>
        </Card.Title>
        
        
      </Card.Body>
    </Card>
    }

    


    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embedlink}?autoplay=1`} title={displayData?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard