import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddConfession() {

  const [confession, setConfession] = useState({
    title:"",
    description:"",
    photo:""
  });

  const handleChnage = (e) => {
    setConfession(prev=> ({...prev, [e.target.name]: e.target.value}))
  }
  
  const navigate = useNavigate()

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:8800/ConfessionsTable', confession)
      navigate("/")
    }catch(err){

    }
  }

  return (
    <div className=' m-4 border-black border-2 rounded-md p-4 max-w-[75%] mx-auto'>
      <h1 className=' p-2 mx-'>Add New Confession</h1>
      <div className='background bg-orange-200 rounded-lg'>
        <ul className=' p-2'>
          <li className='p-1'>
           <p>Title</p>
            <input type="text" placeholder='Title' onChange={handleChnage} name='title' className=' w-full h-10 border-black border-2 p-1 rounded-md hover:border-blue-400'/>
            <p className='text-xs text-right'>{confession.title.length} / 100</p>
          </li>
          <li className='p-1'>
            <p>Description</p>
            <input type="text" placeholder='Description' onChange={handleChnage}name='description' className=' w-full h-10 border-black border-2 p-1 rounded-md hover:border-blue-400'/>
            <p className=' text-xs text-right'>{confession.description.length} / 500</p>
          </li>
          <li className='p-1'>
            <p>Photo</p>
            <input type="text" placeholder='Photo' onChange={handleChnage} name='photo' className=' w-full h-10 border-black border-2 p-1 rounded-md hover:border-blue-400'/>
          </li>
          <li className=' w-fit bg-white rounded-lg hover:bg-gray-300 duration-300'>
            <button className='p-2' onClick={handleClick}>Add Confession</button>     
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddConfession