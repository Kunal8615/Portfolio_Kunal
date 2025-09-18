import React from "react";
import resume from "../../images/resume.png";
import tubetweet from "../../images/tubetweet.png";
import ProjectCard from "./component";
import datacloud from "../../images/datacloud.png";
import scratchify from "../../images/Scratchify.png";
import Social from "../social";

const techStack = `JavaScript 🖥️: For interactive functionality and DOM manipulation.
HTML 📄: Provides structure and content.
CSS 🎨: For styling and layout.
PDF Export 📄: Allows PDF download of resumes.
Responsive Design 📱: Ensures compatibility across devices.`;

function Project() {
  return (
    <>
      <ProjectCard
        title={"TubeTweet"}
        tech={`💻 Frontend: Vite 🔧Backend: Node.js, Express, JavaScript
📊 Database: MongoDB
🛠️ Testing: Postman`}
        img={tubetweet}
        link={"https://tube-tweet-mu.vercel.app/"}
        des={
          "🚀 Introducing TubeTweet: Stream videos, tweet seamlessly, track subscribers, upload content, and create playlists. Built with Vite, Node.js, MongoDB. Explore it here:"
        }
      />

      <ProjectCard
        title={"Scratchify"}
        tech={`💻 Frontend: Vite 🔧Backend: Node.js, Express, JavaScript
📊 Database: MongoDB
🛠️ Testing: Postman`}
        img={scratchify}
        link={"https://scratchify-mocha.vercel.app/"}
        des={
          "About 🚀 Introducing Scratchify! 🎟️🔄 Ever had unused scratch cards from Google Pay, Paytm, or other platforms just sitting there? 🤔💸 With Scratchify, you can exchange them and find the most valuable ones! 💰✨ No more wasted rewards—get the best deals, trade wisely, and maximize your benefits! 🔄🔥 What do you think? Let me know! 💭👇"
        }
      />

      <ProjectCard
        title={"DataCloud"}
        link={"https://data-cloud-rho.vercel.app/"}
        img={datacloud}
        des={
          "DataCloud ☁️ is a robust web application built with the MERN stack for seamless data storage and retrieval. It features secure upload and download capabilities with JWT token authentication 🔒. With an intuitive interface, DataCloud empowers users to easily manage their information 🎉"
        }
        tech={`Technologies: Built with the MERN stack using React 🎨, Vite ⚡, Node.js 🖥️, and MongoDB 📊.
Security: Features secure JWT authentication 🔒`}
      />

      <ProjectCard
        title={"Resume Builder"}
        link={"https://kunal8615.github.io/Resume_builder/"}
        img={resume}
        des={
          "The Resume Builder is an intuitive application designed to help users create professional resumes effortlessly. With its streamlined process, users can focus on showcasing their skills and experiences without any hassle."
        }
        tech={techStack}
      />

      {/* Social Links */}
      <section className="py-8">
        <Social />
      </section>
    </>
  );
}

export default Project;
