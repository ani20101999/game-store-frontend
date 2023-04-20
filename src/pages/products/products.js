import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from "react"
import { Product } from '../product/product'
import "./products.css";
import axios from "axios"

export const Products = () => {

    const [value1,setValue1] = useState([]);

    useEffect(()=>{
    const fetchData = async()=>{
      try{
      const res1 = await axios.get(process.env.REACT_APP_API_URL+"/products?populate=*",{
        headers:{
          "Authorization":"bearer" + process.env.REACT_APP_TOKEN_KEY ,
        }
      })
    setValue1(res1.data.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchData()
    },[])


   const params = useParams();
   console.log(params.id)

  return (
    <div className='products'>
        {
            value1.map((ele)=>{
                if(ele.id==params.id){
                    console.log(ele.id)
                    return <Product ele={ele} key={ele.id}/>
                }
                else{
                    return null;
                }
            })
        }
    </div>
  )
}
