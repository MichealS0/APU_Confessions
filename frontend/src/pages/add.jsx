import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddConfession() {

  const [confession, setConfession] = useState({
    title:"",
    description:""
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

  console.log(confession)

  return (
    <div>
      <h1>Add New Confession</h1>
      <div className='background bg-orange-200'>
        <ul>
          <li>
           <p>Title</p>
            <input type="text" placeholder='Title' onChange={handleChnage} name='title' />
          </li>
          <li>
            <p>Description</p>
            <input type="text" placeholder='Description' onChange={handleChnage}name='description' />
          </li>
          <li>
            <button onClick={handleClick}>Add Confession</button>     
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AddConfession