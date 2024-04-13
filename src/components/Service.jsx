import React from 'react'

const Service = () => {
  // useState([
  //   {
  //     id: "",
  //     title: "",
  //     description: "",
  //     actionButton: {
  //       title: "",
  //       link: "",
  //     },
  //   },
  // ]);


  return (
    <div>
    <>
    <div className='main container ml-6 py-16 '>

<h1 className='text-5xl text-center font-serif font-semibold underline'>My Services</h1>

<div className='services-container flex mt-12 space-x-5 px-5'>

       <div className= 'bg-slate-200 hover:bg-gray-100 cursor-pointer p-5 text-center shadow-lg rounded-xl space-y-4'>
       <i class="text-5xl fa-brands fa-aws"></i>
<h1 className='text-4xl '>Web Development</h1>
<p>Using smart computer learning and pre-written conversations, it sounds just like a person. ChatSonic can also create text and images and searches Google.</p>
<button className='hover:text-white bg-orange-500 px-3 py-2 rounded-full shadow-lg font-serif font-medium'>Check Now</button>
                   
              </div>


             <div className='bg-slate-200  hover:bg-gray-100 cursor-pointer p-5 text-center shadow-lg rounded-xl space-y-4'>
             <i class="text-5xl fa-solid fa-mobile"></i>
<h1 className='text-4xl'>Android Development</h1>
<p>Using smart computer learning and pre-written conversations, it sounds just like a person. ChatSonic can also create text and images and searches Google.</p>
<button className='hover:text-white bg-orange-500 px-3 py-2 rounded-full shadow-lg font-serif font-medium'>Check Now</button>    

                   </div>

                   <div className='bg-slate-200  hover:bg-gray-100 cursor-pointer p-5 text-center shadow-lg rounded-xl space-y-4'>
                   <i class="text-5xl fa-solid fa-server"></i>
<h1 className='text-4xl'>Frontend Development</h1>
<p>Using smart computer  pre-written conversations, it sounds just like a person. ChatSonic can also create text and images and searches Google.</p>
<button className='hover:text-white bg-orange-500 px-3 py-2 rounded-full shadow-lg font-serif font-medium'>Check Now</button>

                   </div>




</div>


    </div>
    
    
    
    </>
      
    </div>
  )
}

export default Service
