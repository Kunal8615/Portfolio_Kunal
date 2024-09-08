import React from "react";


const ProjectCard = ({img,title,des,link,tech}) => {
  return (
    <div className="bg-slate-950 border-2 border-slate-700 text-white m-4 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
       
        <div className="flex justify-center">
          <img
            src={img} 
            alt="Project"
            className="rounded-lg w-full border-2 border-slate-600  lg:h-60 lg:w-max md:w-3/4  h-auto object-cover" // Responsive width
          />
        </div>

      
        <div>
          <h2 className=" text-orange-500 text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 mb-6">
           {des}
          </p>
          <p className="text-gray-300 mb-6">
           <pre className=" text-green-400 font-bold">Tech Stack :</pre>   {tech}
          </p>
         
          <a
            href= {link} // Replace with your project link
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-all"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
