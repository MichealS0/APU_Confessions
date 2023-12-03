import React from 'react'

function Cards({ID, Title, Description, CoverPhoto}) {
  return (
    <div className='h-fit bg-orange-300 w-1/4 rounded-md'>
      <img className='p-2 rounded-xl' src="https://images.unsplash.com/photo-1682687982046-e5e46906bc6e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Your Cover Pic" />
      <div>{ID}</div>
      <h1 className="w-fit font-bold text-xl px-2 py-1">{Title}</h1>
      <div className="max-w-[75%] w-fit px-2 py-0 text-left max-h-[6rem] min-h-[4rem]"><p className='w-fit bg-blue-100 '>{Description}</p></div>
      <button className='bg-black rounded-md m-2'><p className='py-1 px-2 text-white'>Read More</p></button>
    </div>
  )
}

export default Cards