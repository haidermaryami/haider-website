import React, { useState } from 'react'
import logo from"../assets/png.png"

const Header = () => {

 const[brandName,setBrandName] = useState("HaiDer MarYam!!!");

 const[menuLinks,setMenuLinks] = useState([{
    title:"Home",
    link:"/home",
    id:1,
},
{
    title:"About",
    link:"/about",
    id:2,
},
{
    title:"Skills",
    link:"/skills",
    id:3,
},{
    title:"Portfolio",
    link:"/portfolio",
    id:4,
},{
    title:"Contact",
    link:"/contact",
    id:5,
},


]);


const [actionButton,setActionButton] =useState([{
    title:"Download CV",
    link:"/hire-me",
}])

  return (
    <div className='h-20 border items-center main flex justify-between px-16 bg-gray-100'>
      
    
    <div>  <h1 className=' hover: text-orange-600 text-2xl animate-pulse font-bold'>{brandName}</h1></div>



      <div className=' space-x-5 font-serif font-semibold'>
             
                  {menuLinks.map ((link)  => ( <a key={link.id} href={link.link} className='hover:text-orange-400' >{link.title}</a>))}


             
         
      </div>




      <div>
      
      <a
      href={actionButton.link}
      className="px-9 py-2 bg-orange-500 shadow  rounded-full text-1xl "
    >
      {actionButton.title}
    </a>
    </div>

    </div>
  )
};

export default Header
