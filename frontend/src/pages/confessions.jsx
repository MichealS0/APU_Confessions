import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Confs = () =>{
  const [confessions, setConfession] = useState([])

  useEffect(()=>{
    const fetchAllConfessions = async () =>{
      try{
        const res = await axios.get("http://localhost:8800/ConfessionsMain")
        setConfession(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllConfessions()
  },[])


return (
  <div>
    <div>
      {confessions.map(confession=>(
        <div>
          <h1>{confession.Title}</h1>
          <div>{confession.Description}</div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Confs