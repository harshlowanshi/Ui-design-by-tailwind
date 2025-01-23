import React from 'react'

const Navber = () => {
  return (
  <nav className= ' border-2 text-white w-7/12 h-16 flex items-center text-center justify-evenly mt-5  rounded-2xl border-[#2C2C2E]'>
    <h3>Finament</h3>
    <a href="">Feature</a>
    <button className=' p-2 bg-[#2C2C2E] w-1/6  text-center rounded-2xl ' >Pricing</button>
    <a href="3">Resource</a>
    <button className=' p-2 bg-[#2C2C2E] w-1/4  text-center rounded-2xl' >Start Free Trial </button>
  </nav>
  )
}

export default Navber
