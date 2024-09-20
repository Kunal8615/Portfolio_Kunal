import React from "react";

function Heading({ prop }) {
  return (
    <>
      <div className="text-center">
        <div className="flex mb-2 w-full content-center items-center justify-center bg-black">
          <span className="absolute flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
            I'm Kunal
          </span>
          <h1 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
            I'm Kunal
          </h1>
        </div>
        <p className="p-2 mb-6 text-lg font-normal text-yellow-100 lg:text-xl sm:px-16 xl:px-48">
        a B.Tech student with a passion for technology and a strong foundation in web development.
         With experience in the MERN stack and responsive design, I have honed my skills in JavaScript,
          HTML, and CSS to create dynamic, user-friendly web applications. In addition to my web
           development expertise, I have a background in graphic design, which allows me to craft
            engaging visuals that enhance user interaction. I am also interested in gaming, which 
            fuels my creativity and problem-solving skills. Proficient in programming languages like
             C and C++, I am dedicated to leveraging technology to solve real-world problems and 
             enhance user experiences. As I explore new technologies and ideas, I strive to stay 
             ahead in the fast-paced tech industry. I welcome opportunities for collaboration and connection, so feel free to reach out on LinkedIn.
        </p>
        <a
          href="https://www.linkedin.com/in/kunal-1a4983228/"
          className=" text-black font-medium bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 rounded-full text-lg px-6 py-2 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          More
        </a>
      </div>
    </>
  );
}

export default Heading;
