import React from "react";
import Social from "./social";

function Skill() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent mb-8">
            My Skills
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="relative py-16 px-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-full w-full m-auto grid grid-row-4 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL--h8BE2ZUahfb8Tj0RDno-V65VMe79-CA&s"
                  loading="lazy"
                  width="250"
                  height="250"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="JavaScript Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    JavaScript
                  </h5>
                  <p className="text-sm text-gray-400">Advanced</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-thumbnail.png"
                  loading="lazy"
                  width="250"
                  height="250"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="C++ Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    C++
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="Python Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    Python
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="React Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    React
                  </h5>
                  <p className="text-sm text-gray-400">Advanced</p>
                </div>
              </div>
            </div>

            
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="MySQL Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    MySQL
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-3628954-3030179.png?f=webp&w=256"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="Node.js Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    Node.js
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>
            
            {/* Testing */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="Testing Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    Testing
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>

            {/* Dynamic Programming */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="Dynamic Programming Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    Dynamic Programming
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>

            {/* MongoDB */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="MongoDB Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    MongoDB
                  </h5>
                  <p className="text-sm text-gray-400">Intermediate</p>
                </div>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/tailwind-css-2752024-2284895.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="Tailwind CSS Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    Tailwind CSS
                  </h5>
                  <p className="text-sm text-gray-400">Advanced</p>
                </div>
              </div>
            </div>

            {/* HTML5 */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="HTML5 Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    HTML5
                  </h5>
                  <p className="text-sm text-gray-400">Advanced</p>
                </div>
              </div>
            </div>

            {/* CSS3 */}
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
              <div className="relative space-y-6 py-8 p-6 flex flex-col items-center justify-center">
                <img
                  src="https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 transition-transform duration-300 group-hover:scale-110"
                  alt="CSS3 Logo"
                />
                <div className="space-y-2 text-center">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-orange-400">
                    CSS3
                  </h5>
                  <p className="text-sm text-gray-400">Advanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8">
        <Social/>
      </section>
    </div>
  );
}

export default Skill;
