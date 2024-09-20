import React from "react"

function Heading({prop}){
    return (
        <>
        
<div className="  text-center">

<div className="flex mb-2 w-full content-center items-center justify-center bg-black">
    <span className="absolute  flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
    I'm Kunal
  </span>
    <h1
        className="  bg-gradient-to-r  from-cyan-500 via-yellow-500  to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        I'm Kunal
    </h1>
</div>
<p className=" p-2 mb-6 text-lg font-normal text-yellow-100 lg:text-xl sm:px-16 xl:px-48 ">B.Tech student with experience in JS, HTML, CSS, Graphic designing, gaming and programming languages like C and C++. Passionate about using technology to enhance user experience and solve real-world problems. Enthusiastic about exploring new technologies and ideas to stay ahead in the fast-paced tech industry.</p>
<button type="button" className="mb-5 text-black font-medium bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-lg px-6 py-2 text-center me-2 mb-2 dark:focus:ring-yellow-900" href="https://www.linkedin.com/in/kunal-1a4983228/">More</button>
</div>
       
</>
    )

} 
export default Heading;