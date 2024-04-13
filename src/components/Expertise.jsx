import React from 'react'
import banner from "../assets/banner_wallpaper.svg"
const Expertise = () => {
  return (
    <>
      
    <div className='expertise '>
    
    <h1 className='text-center my-8 font-serif font-semibold underline text-4xl'>My Expertise</h1>

    <div
     style={{
      backgroundImage: `url(${banner})`,
      backgroundSize: "cover",
     }}
    className="box-container  items-center flex py-16"
  >
    <div className="flex text-white justify-center">
      {/* text container */}
      <div className="w-2/3 text-center space-y-4">
        <h1 className="text-4xl font-bold">I love these technologies</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
          autem facere molestias libero eaque praesentium, dignissimos
          dolores, cum nisi rerum, modi corporis eligendi harum. Ut
          provident saepe in et ipsum.
        </p>
        <button className=" text-2xl px-4 font-serif py-2 bg-orange-500 rounded-full shadow-lg">
          Hire Me
        </button>
      </div>
    </div>
    <div className='skills flex justify-center'>
    
    
    <div className='flex w-2/3 space-x-3 flex-wrap '>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Core java</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>J2EE</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Hibernat(ORM tool)</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer '>Spring FrameWork</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>Spring Boot Framework</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer '> Spring Security</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer '>    Javascript</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'>  ReactJS</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'> Tailwind CSS</p>
    <p className='bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer'> Angular</p>
    <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">NextJs</p>
  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">State Management</p>
  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">AWS Cloud</p>
  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">EC2</p>
  <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">Deploying on Clound</p>
</div>
    
</div>
    
    
    </div>
    
    
    
    </div>



    </>
  )
}

export default Expertise
