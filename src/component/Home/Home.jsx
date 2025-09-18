import React from 'react'
import {Collect,Insta,ProductSection,Research,Skill,Social,Heading} from "../../allComp.js"
import {black,drona,main,instaa,imgg,sih} from "../../allimages.js"

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10">
          <Heading/>
        </div>
      </section>
      
      {/* Social Links Section */}
      <section className="py-8">
        <Social/>
      </section>
      
      {/* Quick Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">1</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300">
              <div className="text-3xl font-bold text-orange-400 mb-2">12+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
