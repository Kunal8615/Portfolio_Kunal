import React from 'react';
import resume from "../../images/resume.png";
import tubetweet from "../../images/tubetweet.png";
import ProjectCard from './component';
import datacloud from "../../images/datacloud.png/datacloud.png"
const techStack = `JavaScript 🖥️: For interactive functionality and DOM manipulation.\nHTML 📄: Provides structure and content.\nCSS 🎨: For styling and layout.\nPDF Export 📄: Allows PDF download of resumes.\nResponsive Design 📱: Ensures compatibility across devices.`;

function Project() {
  return (
    <>
      <ProjectCard 
        title={"TubeTweet"} 
        tech={`💻 Frontend: Vite 🔧Backend: Node.js, Express, JavaScript\n📊 Database: MongoDB\n🛠️ Testing: Postman`} // Use backticks for multiline strings
        img={tubetweet} 
        link={"https://frontend-kappa-five-10.vercel.app/login"} 
        des={"🚀 Introducing TubeTweet: Stream videos, tweet seamlessly, track subscribers, upload content, and create playlists. Built with Vite, Node.js, MongoDB. Explore it here:"} 
      />

      <ProjectCard title={"Resume Builder"} link={"https://kunal8615.github.io/Resume_builder/"} img={resume} des={"with ease. Built entirely using JavaScript, HTML, and CSS, the app offers a user-friendly interface where individuals can input their personal information, education, work experience, skills, and other relevant details."} tech={techStack } />
    <ProjectCard
      title={"DataCloud"}
      link={"https://data-cloud-rho.vercel.app/"}
      img={datacloud}
      des={"DataCloud is a robust web application built using the MERN stack, designed for seamless data storage and retrieval. Users can easily upload and download their data securely, thanks to features like JWT token authentication that ensure a safe and user-friendly experience. With its intuitive interface and efficient data management capabilities, DataCloud empowers users to take control of their information with ease."}
      tech={"DataCloud is a web app for easy data storage and retrieval. Built with the MERN stack, it uses React and Vite for dynamic interfaces 🎨, Node.js and Express for backend ⚙️, and MongoDB for data 📊. JWT ensures secure authentication 🔒. With its intuitive design, DataCloud makes data management effortless!"}
    />
    </>
  );
}

export default Project;
