import React from 'react'

function Cards({ID, Title, Description}) {
  return (
    <div className=' max-w-md mx-auto max-h-lg my-auto bg-blue-400 rounded-xl p-2 hover:bg-blue-800 duration-200'>
      <div className="">{ID}</div>
      <h1 className=" font-bold text-4xl text-center p-2">{Title}</h1>
      <div className=" p-2 text-center">{Description}</div>
    </div>
  )
}

export default Cards