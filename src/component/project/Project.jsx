import React from 'react';
import resume from "../../images/resume.png";
import tubetweet from "../../images/tubetweet.png";
import ProjectCard from './component';
import datacloud from "../../images/datacloud.png"
const techStack = `JavaScript 🖥️: For interactive functionality and DOM manipulation.\nHTML 📄: Provides structure and content.\nCSS 🎨: For styling and layout.\nPDF Export 📄: Allows PDF download of resumes.\nResponsive Design 📱: Ensures compatibility across devices.`;

function Project() {
  return (
    <>
      <ProjectCard 
        title={"TubeTweet"} 
        tech={`💻 Frontend: Vite 🔧Backend: Node.js, Express, JavaScript\n📊 Database: MongoDB\n🛠️ Testing: Postman`} // Use backticks for multiline strings
        img={tubetweet} 
        link={"tube-tweet-mu.vercel.app/"} 
        des={"🚀 Introducing TubeTweet: Stream videos, tweet seamlessly, track subscribers, upload content, and create playlists. Built with Vite, Node.js, MongoDB. Explore it here:"} 
      />

    <ProjectCard
      title={"DataCloud"}
      link={"https://data-cloud-rho.vercel.app/"}
      img={datacloud}
      des={"DataCloud ☁️ is a robust web application built with the MERN stack for seamless data storage and retrieval. It features secure upload and download capabilities with JWT token authentication 🔒. With an intuitive interface, DataCloud empowers users to easily manage their information 🎉"}
      tech={`Technologies: Built with the MERN stack using React 🎨, Vite ⚡, Node.js 🖥️, and MongoDB 📊.
Security: Features secure JWT authentication 🔒 `}
    />
      <ProjectCard title={"Resume Builder"} link={"https://kunal8615.github.io/Resume_builder/"} img={resume} des={"The Resume Builder is an intuitive application designed to help users create professional resumes effortlessly. With its streamlined process, users can focus on showcasing their skills and experiences without any hassle."} tech={techStack } />
    </>
  );
}

export default Project;
