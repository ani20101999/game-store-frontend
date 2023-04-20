
import React, { useEffect, useState } from 'react'
import "./home.css"
import { Card } from '../../components/card/Card'
import axios from "axios"


 export const Home = () => {
  const [value,setValue] = useState([]);

useEffect(()=>{
const fetchData = async()=>{
  try{
  const res = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{
    headers:{
      "Authorization":"bearer" + process.env.REACT_APP_TOKEN_KEY ,
    }
  })
setValue(res.data.data)
  }
  catch(err){
    console.log(err)
  }
}
fetchData()
},[])
console.log(value)
  return (
    <div className='home'>
      {value.map((item)=>{
        return <Card items={item} key={item.id}/>
      })}  
    </div>
  )
}


