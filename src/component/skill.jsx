import React from "react";
import Social from "./social";

function Skill() {
  return (
    <>
      <div className=" flex  flex-row flex-wrap relative pb-5  " >
        <div
          aria-hidden="true"
          className="absolute inset-0 h-MAZ w-full m-auto grid grid-row-4 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-0 text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondary"
            >
            
            </svg>
            <h2 className="  lg:ml-64  text-2xl font-bold text-yellow-200 md:text-5xl">
              Skills
            </h2>
          </div>
          <div className="mt-8  grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="   group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="  relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL--h8BE2ZUahfb8Tj0RDno-V65VMe79-CA&s"
                  loading="lazy"
                  width="250"
                  height="250"
                  className="w-12 h-12 "
                  alt="Xyz.com Logo"
                />
                <div className="  space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    JavaScript
                  </h5>
                 
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-thumbnail.png"
                  loading="lazy"
                  width="250"
                  height="250"
                  className="w-12 h-12 "
                  alt="ABC.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    CPP
                  </h5>
                 
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 "
                  alt="ABC.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Python
                  </h5>
                 
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 "
                  alt="ABC.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    React
                  </h5>
                 
                </div>
              </div>
            </div>

            
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12"
                  alt="ABC.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    My SQL
                  </h5>
                 
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-3628954-3030179.png?f=webp&w=256"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 "
                  alt="ABC.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Node Js
                  </h5>
                 
                </div>
              </div>
            </div>
            
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 "
                  alt="ASD.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    HTML
                  </h5>
                 
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8 flex flex-col items-center justify-center">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 "
                  alt="TMK.co Logo"
                />
                <div className="space-y-2
                ">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    CSS
                  </h5>
                 
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Social/>
    </>
  );
}

export default Skill;
