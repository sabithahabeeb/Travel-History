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
    // call delete http request to http://localhost:4000/video/id to remove video from  json server return response to videocard component

    return await commonAPI("DELETE",`${serverURL}/video/${id}`,{})
}


// add watching history to json server
export const addHistory = async (videoHistory)=>{
    // call post http request to http://localhost:4000/history to add video history in json server return response  to videoCard
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}
// get watching history to json server
export const getHistory = async ()=>{
    // call get http request to http://localhost:4000/history to get video history in json server return response  to watch history component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// delete a watching  video
export const deletewatchvideo  = async (id)=>{
    // call delete http request to http://localhost:4000/history/id to remove video from  json server return response to history component

    return await commonAPI("DELETE",`${serverURL}/history/${id}`,{})
}

// selected videos
export const selectedVideo = async (body)=>{
    // call httprequest to http://localhost:4000/selected to get video from json server return response to selected component
    return await commonAPI("POST",`${serverURL}/selected`,body)
}

// delete a watching  video
export const deleteselectedvideo  = async (id)=>{
    // call delete http request to http://localhost:4000/selected/id to remove video from  json server return response to selected component

    return await commonAPI("DELETE",`${serverURL}/selected/${id}`,{})
}

// get selected videos
export const getSelectedVideo = async ()=>{
    // call get http request to http://localhost:4000/selected to get video from  json server return response to selected component
return await commonAPI("GET",`${serverURL}/selected`,"")
}