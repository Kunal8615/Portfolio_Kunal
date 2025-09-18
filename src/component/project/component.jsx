import React from "react";

const ProjectCard = ({img,title,des,link,tech}) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:border-orange-500/50 group">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-xl border-2 border-gray-600 group-hover:border-orange-500 transition-colors duration-300">
            <img
              src={img} 
              alt="Project"
              className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-6"> 
          <div>
            <h2 className="text-orange-400 text-3xl font-bold mb-2 group-hover:text-orange-300 transition-colors duration-300">
              {title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg">
            {des}
          </p>
          
          <div className="space-y-3">
            <h3 className="text-green-400 font-bold text-lg">Tech Stack:</h3>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
              <pre className="text-gray-300 text-sm whitespace-pre-wrap font-mono">
                {tech}
              </pre>
            </div>
          </div>
         
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-black font-semibold rounded-full hover:from-orange-500 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            <span>View Project</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
