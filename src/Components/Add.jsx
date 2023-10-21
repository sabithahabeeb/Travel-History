import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
// import { Form } from 'react-router-dom';

function Add({setUploadVideoServerResponse}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [video,setVideo] = useState({
        id:"",
        caption:"",
        name:"",
        url:'',
        embedlink:''

    })

       const extractURL = (e)=>{
        const {value} = e.target
        if(value){
            const embedData = `https://www.youtube.com/embed/${value.slice(-11)}`
            setVideo({...video,embedlink:embedData})
        }else{
            setVideo({...video,embedlink:""})
        }
       }
       console.log(video);
       const hangleAdd = async ()=>{
        const {id, caption,name,url,embedlink}= video
        if(!id || !caption ||!name || !url || !embedlink){
            alert("Please form completely")
        }else{
        //    make api call
        const response = await uploadVideo(video)
        console.log(response);
        if(response.status>=200&&response.status<300){
            // set server response
            setUploadVideoServerResponse(response.data)
            // hide modal
            handleClose()
            alert(`${response.data.caption} video succesfully added.....`)
            
        }else{
            alert("Please provide unique id for loading videos....")
        }

        }
       }
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1>Add Youre Videos</h1>
                <button onClick={handleShow} className='btn border rounded bg-success '>Add</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add youre Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Please fill thr following Details !....
                    </p>

                    <Form className='border border-secondery p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Vedio Id" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Place Name" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Youre Name" onChange={(e)=>setVideo({...video,name:e.target.value})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Place image" onChange={(e)=>setVideo({...video,url:e.target.value})} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Vedio for place " onChange={extractURL} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={hangleAdd}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add


// "https://www.youtube.com/embed/Qipxi1Qn8iE"