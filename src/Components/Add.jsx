import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
// import { Form } from 'react-router-dom';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Form.Control type="text" placeholder="Enter Vedio Id" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Place Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Youre Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Place image" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Vedio for place" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add