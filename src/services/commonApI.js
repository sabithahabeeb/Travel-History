import axios from 'axios'

export const commonAPI = async (httpMethod,url,reqBody)=>{
    const reqconfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:{
            "Content-Type":"application/json"
        }
    }
  return  axios(reqconfig).then(
        (result)=>{
            return result
        }
    ).catch((err)=>{
        return err
    })
}