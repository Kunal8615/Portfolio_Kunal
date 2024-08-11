import React from "react";

import imgg from "../images/imgg.png"
import Social from "./social";

function Insta(){
    return (
        <>
        
        <section className=" pb-8 pt-20 bg-[url('https://wallpaperaccess.com/full/2137189.png')] bg-center bg-cover">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
        <h1
            className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-white mb-5 md:text-5xl leading-[50px]">
            Learn Concept Of Back-end with 
            <span className="text-yellow-400"> Backend_Js</span>
        </h1>
       

        <h2 className="max-w-2xl mx-auto  text-xl  text-white pb-3">
        I am uploading  here some comprehensive Content about Backend Development. This content covers various aspects, including the role of the backend, key technologies involved, and best practices."
        </h2> 
       
        <a href="https://www.instagram.com/backend_js/"
            className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500">
           Check out
        
        </a>
        <div className="flex justify-center ">
            <img
            src={imgg}
            alt="Dashboard image"
          />
        </div>
    </div>
</section>
<Social/>
</>
    )
}

export default Insta;