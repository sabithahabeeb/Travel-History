import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { deletewatchvideo, getHistory } from '../services/allAPI'

function History() {
  const [wDelete,setWDelete] = useState()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [getAllHistory,setGetAllHistory] = useState([])
  const getwatchHistory = async ()=>{
    const {data}  = await getHistory()
    setGetAllHistory(data);

  }
  useEffect(()=>{
    getwatchHistory()

  },[wDelete])
  console.log(getAllHistory);

  const removeWatchVideo = async (id)=>{
    // make api call
    const response = await deletewatchvideo(id)
    setWDelete(response)

  }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
        <h1  className='m-5' >Your watching Videos</h1>
    </div>
  <Row>
      {
        getAllHistory?.length>0?
        getAllHistory.map((item)=>(
       <>
         
             <Col  xs={12} md={6} lg={4} xl={3}>
               
                  <Card  className='mb-5'  style={{ width: '18rem' }}>
                  <Card.Img  onClick={handleShow}  variant="top" src={item.url} />
                  <Card.Body>
                    <Card.Title className='d-flex flex-column justify-content-center align-items-center'><h4>{item.caption}</h4>
                    <h5>{item.name}</h5>
                    <h4>Watching time {item.timeStamp}</h4>
            
                   <div className='d-flex flex-row justify-content-between align-items-center'>
                     <button className='btn'><i onClick={()=>removeWatchVideo(item.id)} className="fa-solid fa-trash text-danger"></i></button>
              
                   </div>
                    </Card.Title>
                    
                    
                  </Card.Body>
                  
                </Card>
      
             </Col>
             
    
             <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
               <Modal.Title>{item?.caption}</Modal.Title>
             </Modal.Header>
             <Modal.Body>
             <iframe width={"100%"} height={"400px"} src={`${item?.embedlink}?autoplay=1`} title={item?.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
             </Modal.Body>
             
           </Modal>
          
       </>
  
        ))
       :<div className='d-flex flex-column justify-content-center align-items-center p-5 m-5'><img className='rounded' src="https://phoneky.co.uk/thumbs/screensavers/down/cartoon-anime/whereismyh_xwad5cen.gif" alt="" />
       <p style={{fontSize:'20px'}} className='fw-bold text-danger'>You Are Not Watched Videos</p>
       </div>
      }
     
  </Row>
 
    </>
  )
}

export default History