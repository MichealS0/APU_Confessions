import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cards from '../components/Cards'

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
    <div className=' p-2 flex gap-1 flex-wrap'>
      {confessions.map(confession=>(
        <Cards ID={confessions.ID} Title={confession.Title} Description={confession.Description}/>
      ))}
    </div>
  </div>
)
}

export default Confs