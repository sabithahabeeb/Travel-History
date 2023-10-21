import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideo } from '../services/allAPI'
function Vedio({uploadVideoServerResponse}) {
    const [allVideo,setAllVideo] = useState([])
    const [deleteAvideo,setDeleteAVideo] = useState(false)
    const getAllUploadVideos = async ()=>{
        // make api call
        const {data} = await getAllVideo()
        setAllVideo(data)
    }
    useEffect(()=>{
        setDeleteAVideo(false)
        getAllUploadVideos()
    },[uploadVideoServerResponse,deleteAvideo])
    console.log(allVideo);
    return (
        <>
            <Row>

                {
                    allVideo?.length>0?
                    allVideo.map(video=>(
                        <Col sm={12} md={6} lg={4} xl={3}  >
                        <VideoCard displayData={video} setDeleteAVideo={setDeleteAVideo}/>
                    </Col>

                    ))

                   :<p className='fw-bold text-danger'>NOthing To Display</p>
                }
                
            </Row>
        </>
    )
}

export default Vedio