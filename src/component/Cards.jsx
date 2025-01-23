
import React from 'react'

const Cards = ({ role ,title , button , plan , content ,list1, list2,list3,list4,list5}) => {



  
  return (

    <div className={ role === "second" ? 'w-1/4 p-3 mb-2 border-2  border-[#F3652F]  rounded-2xl flex itams-center text-start  gap-4 flex-col' : 'w-1/4 p-3 mb-2 border-2   rounded-2xl flex itams-center text-start  gap-4 flex-col' }>

     
<p>{title}</p>
<h3>{plan}</h3>
<p>{content}</p>
<button className={role === "second" ? 'p-2 bg-[#F3652F]  rounded-2xl' : 'p-2 bg-[#2C2C2E] rounded-2xl' }>{button}</button>
    
<ul className=' flex  flex-col gap-2'>
  <li><i className="ri-arrow-right-circle-fill"></i>‎ ‎{list1}</li>
  <li><i className="ri-arrow-right-circle-fill"></i>‎ ‎ {list2}</li>
  <li><i className="ri-arrow-right-circle-fill"></i>‎ ‎ {list3}</li>
  <li><i className="ri-arrow-right-circle-fill"></i>‎ ‎{list4}</li>
<li><i className="ri-arrow-right-circle-fill"></i>‎ ‎ {list5} </li>
</ul>

    </div>
  )
}

export default Cards
