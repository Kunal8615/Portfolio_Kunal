import React from 'react';
import resume from "../../images/resume.png";
import tubetweet from "../../images/tubetweet.png";
import ProjectCard from './component';
import datacloud from "../../images/datacloud.png"
import scratchify from "../../images/Scratchify.png"
import Social from '../social';

const techStack = `JavaScript 🖥️: For interactive functionality and DOM manipulation.\nHTML 📄: Provides structure and content.\nCSS 🎨: For styling and layout.\nPDF Export 📄: Allows PDF download of resumes.\nResponsive Design 📱: Ensures compatibility across devices.`;

function Project() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent mb-8">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative web applications and solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <ProjectCard 
            title={"TubeTweet"} 
            tech={`💻 Frontend: Vite 🔧Backend: Node.js, Express, JavaScript\n📊 Database: MongoDB\n🛠️ Testing: Postman`}
            img={tubetweet} 
            link={"tube-tweet-mu.vercel.app/"} 
            des={"🚀 Introducing TubeTweet: Stream videos, tweet seamlessly, track subscribers, upload content, and create playlists. Built with Vite, Node.js, MongoDB. Explore it here:"} 
          />

          <ProjectCard 
            title={"Scratchify"} 
            tech={`💻 Frontend: Vite 🔧Backend: Node.js, Express, JavaScript\n📊 Database: MongoDB\n🛠️ Testing: Postman`}
            img={scratchify} 
            link={"https://scratchify-mocha.vercel.app/"} 
            des={"About 🚀 Introducing Scratchify! 🎟️🔄 Ever had unused scratch cards from Google Pay, Paytm, or other platforms just sitting there? 🤔💸 With Scratchify, you can exchange them and find the most valuable ones! 💰✨ No more wasted rewards—get the best deals, trade wisely, and maximize your benefits! 🔄🔥 What do you think? Let me know! 💭👇"} 
          />

          <ProjectCard
            title={"DataCloud"}
            link={"https://data-cloud-rho.vercel.app/"}
            img={datacloud}
            des={"DataCloud ☁️ is a robust web application built with the MERN stack for seamless data storage and retrieval. It features secure upload and download capabilities with JWT token authentication 🔒. With an intuitive interface, DataCloud empowers users to easily manage their information 🎉"}
            tech={`Technologies: Built with the MERN stack using React 🎨, Vite ⚡, Node.js 🖥️, and MongoDB 📊.
Security: Features secure JWT authentication 🔒 `}
          />
          
          <ProjectCard 
            title={"Resume Builder"} 
            link={"https://kunal8615.github.io/Resume_builder/"} 
            img={resume} 
            des={"The Resume Builder is an intuitive application designed to help users create professional resumes effortlessly. With its streamlined process, users can focus on showcasing their skills and experiences without any hassle."} 
            tech={techStack} 
          />
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8">
        <Social/>
      </section>
    </div>
  );
}

export default Project;
