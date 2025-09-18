import React from "react";

function Heading({ prop }) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated Background Text */}
          <div className="relative mb-8">
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r blur-2xl from-blue-500 via-yellow-300 to-pink-500 bg-clip-text text-7xl md:text-8xl lg:text-9xl font-extrabold text-transparent opacity-30 select-none">
              I'm Kunal
            </span>
            <h1 className="relative bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-500 bg-clip-text text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent text-center select-auto animate-pulse">
              I'm Kunal
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
              Full Stack Developer with Experties in Backend Development
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <p className="text-lg md:text-xl font-normal text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
            I am a MERN stack developer with approximately one year of professional experience , skilled in technologies like Node.js, React.js, and MongoDB. I have built several full-stack projects from scratch, including "TubeTweet," a video-streaming platform designed for user engagement and content management. As a B.Tech Branch Topper, I am passionate about delivering high-quality and efficient web applications
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.linkedin.com/in/kunal-1a4983228/"
              className="group relative px-8 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-black font-semibold rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              <span className="relative z-10">Connect on LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="/about"
              className="px-8 py-3 border-2 border-orange-400 text-orange-400 font-semibold rounded-full text-lg transition-all duration-300 hover:bg-orange-400 hover:text-black focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Learn More
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
