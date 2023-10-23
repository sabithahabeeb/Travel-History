import React, { useEffect, useState } from 'react'
import { deleteselectedvideo, getSelectedVideo, selectedVideo } from '../services/allAPI'

function Selected() {
  const [getselected,setGetSelected] = useState([])
  const getAllSelectedVideo = async ()=>{
    const {data} = await getSelectedVideo()
 setGetSelected(data)

  }
  useEffect(()=>{
    getAllSelectedVideo()
  },[])
  console.log(getselected);
const removeselected = async (id)=>{
  // api call
  await deleteselectedvideo(id)
  getAllSelectedVideo()


}

  return (
    <>
    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Name</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
<tbody>
  {
    getselected?.length>0?
    getselected.map((item,index)=>(
      <tr>
        <td>{index+1}</td>
        <td>{item?.caption}</td>
        <td>{item?.name}</td>
        <td><img height={'100px'} src={item?.url} alt="" /></td>
        <td><button onClick={()=>removeselected(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
</td>
      </tr>

    )):<div className='d-flex flex-column justify-content-center align-items-center p-5 m-5'><img className='rounded' src="https://www.shutterstock.com/image-vector/dont-know-hipster-businessman-shrugging-260nw-659515963.jpg" alt="" />
    <p style={{fontSize:'20px'}} className='fw-bold text-danger'>You Have Not Selected Videos</p>
    </div>
  }
</tbody>
    </table>
    </>
  )
}

export default Selected