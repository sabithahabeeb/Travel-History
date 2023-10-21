import { commonAPI } from "./commonApI"
import { serverURL } from "./serverURL"

// uploding video
export const uploadVideo = async (body)=>{
    // call post http request to http://localhost:4000/video to add video from  json server return response to add component
   return await commonAPI("POST",`${serverURL}/video`,body)
}

// get all videos
export const getAllVideo = async ()=>{
        // call get http request to http://localhost:4000/video to get video from  json server return response to view component
    return await commonAPI("GET",`${serverURL}/video`,"")
}

// get a single video
export const getAVideo = async (id)=>{
            // call get http request to http://localhost:4000/video/id to get video from  json server return response to videocard component
    return await commonAPI("GET",`${serverURL}/video/${id}`,"")
}

// delete a single video
export const deleteAvideo  = async (id)=>{
    // call get http request to http://localhost:4000/video/id to remove video from  json server return response to videocard component

    return await commonAPI("DELETE",`${serverURL}/video/${id}`,{})
}