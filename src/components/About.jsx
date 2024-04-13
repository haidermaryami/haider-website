import React, { useState } from 'react'
import bg from "../assets/bg.png"

const About = () => {

  const[data,setData] = useState({
        image:bg,
        title:`Java backend & Android Developer`,
        desc:`Hello Haider, thank you for your sample... unfortunetly im gonna go with someone else as they have shown better writing skills, but if anything comes up and i need an extra help i will let you know. write a professional reply

        <br/>
        
        ChatGPT
        Of course, I understand your decision, and I appreciate the opportunity to provide a sample of my work. Should you require any assistance in the future, please d`,

        actionButton:{
            title:"Read more...",
            link:"/readmore"
        }
    })

  return (
    <>
  <div className='border  bg-gray-100 py-16'>

<h1 className='text-5xl font-serif pb-16 font-semibold underline text-center'>About Me</h1>

<div className='flex items-center'>

<div className='w-full flex justify-center'>

<img className='w-fit rounded-full animate-pulse h-fit	h-50' src={data.image}/>

</div>


<div className='w-full flex justify-center'>  

<div className='space-y-5 w-2/3'>
<h1 className='text-4xl font-serif font-semibold'>{data.title}</h1>

<p>{data.desc}</p> 


<button className= ' hover:text-white bg-orange-500 rounded-full py-2 px-3 text-2xl font-serif shadow-lg'>{data.actionButton.title}</button>
</div>

</div>

</div>  



  </div>




    </>
  )
}

export default About
