import React from 'react'
import {Link} from "react-router-dom"



function Header() {
  return (
    <>
    <div className="w-screen h-20 bg-blue-500 text-center p-8">
        <p className="text-blue-50 text-2xl">Vinod Kumar Directory App</p>
    </div>
    <div className='flex gap-10 m-5'>
      <Link to="/">
  <button className="border-2 bg-blue-400 w-30 h-10 text-amber-50">Add New Person</button>

  </Link>   
  <Link to="/retrive">   
        <button className="border-2 bg-blue-400 w-30 h-10 text-amber-50">Retrive New Person</button>
        </Link>
    </div>
    </>
  )
}

export default Header