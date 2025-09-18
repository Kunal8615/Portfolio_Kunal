import React from 'react'
import {Collect,Insta,ProductSection,Research,Skill,Social,Heading} from "../../allComp.js"
import {black,drona,main,instaa,imgg,sih} from "../../allimages.js"
import award from "../../images/award.jpg"

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-yellow-300 to-pink-500 bg-clip-text text-transparent mb-8">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get to know my journey, achievements, and passion for technology
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductSection 
            prop={"flex flex-col lg:flex-row items-center gap-8"} 
            val={"I am Kunal, currently in the 4th year of B.Tech with a specialization in Artificial Intelligence and Machine Learning at Dronacharya Group of Institutions. Throughout my studies, I have been actively engaged in various practical projects and internships, particularly in web development and AI applications. These experiences have allowed me to apply theoretical knowledge in real-world scenarios, enhancing my skills in developing innovative solutions. My goal is to contribute to technological progress by creating intelligent and efficient web applications that can solve complex problems and improve user experiences across various industries."} 
            col={"black"}  
            resource={drona}
          />
        </div>
      </section>

      {/* Hackathon Experience */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ProductSection 
            prop={"flex flex-col lg:flex-row-reverse items-center gap-8"} 
            val={"I had the privilege of participating in the 24-hour Smart India Hackathon 2022 as a team member of Spartans, during the Software Edition held at ACS College of Engineering, Bangalore. This intensive experience tested our skills and resilience, allowing us to innovate and develop impactful solutions within a tight timeframe."} 
            resource={sih} 
            col={"black"}
          />
        </div>
      </section>
      
      {/* Research Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Research 
            prop={"flex flex-col lg:flex-row items-center gap-8"} 
            col={"black"} 
            text={"Research & Publications"}  
            resourse={main} 
            val={`I presented the paper "Smart Wastebin for Smart Cities Using Internet of Things: A Waste Detection and Collection System" at the International Conference on Sustainable Computing and Integrated Communication in Changing Landscape of AI (ICSCAI-2024) at Lloyd Institute of Engineering & Technology, Greater Noida.`}
          />
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Research 
            prop={"flex flex-col lg:flex-row-reverse items-center gap-8"} 
            resourse={award} 
            col={"black"} 
            text={"Awards & Recognition"} 
            val={"Grateful to be honored as the Branch Topper (AIML) at Dronacharya Group of Institutions. This incredible achievement wouldn't have been possible without the guidance and support of my amazing teachers. Forever grateful and ready to make my mark! 💫🎓"}
          />
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8">
        <Social/>
      </section>
    </div>
  )
}

export default About
