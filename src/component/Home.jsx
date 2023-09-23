import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "./Card"

export default function Home() {
const [item,setItem]=useState([])
const [Link,setLink]=useState('')


  useEffect(()=>{
    const fetchApi=async()=>{
      const fetching=await axios.get("http://localhost:5000")
    console.log(fetching.data.link[0].link)
    setItem(fetching.data.api)
    setLink(fetching.data.link[0].link)
       
    }
    fetchApi()
   
  },[Link])
  return <>
         {
          item.map((item)=>{
            return <Card props={item} link={Link}/>
          })
         }
         <div>Home</div>
  </>
}
