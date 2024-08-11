import React from 'react'

import {Collect,Insta,ProductSection,Research,Skill,Social,Heading} from "../../allComp.js"
import  {black,drona,main,instaa,imgg,sih} from "../../allimages.js"

function About() {
  return (
    <>
    <ProductSection prop={"flex"} val={"I am Kunal, currently in the 4th year of B.Tech with a specialization in Artificial Intelligence and Machine Learning at Dronacharya Group of Institutions. Throughout my studies, I have been actively engaged in various practical projects and internships, particularly in web development and AI applications. These experiences have allowed me to apply theoretical knowledge in real-world scenarios, enhancing my skills in developing innovative solutions. My goal is to contribute to technological progress by creating intelligent and efficient web applications that can solve complex problems and improve user experiences across various industries."} col={"black"}  resource={drona}></ProductSection>
    <ProductSection prop={"flex flex-row-reverse"} val={"I had the privilege of participating in the 24-hour Smart India Hackathon 2022 as a team member of Spartans, during the Software Edition held at ACS College of Engineering, Bangalore. This intensive experience tested our skills and resilience, allowing us to innovate and develop impactful solutions within a tight timeframe."} resource={sih} col={"black"}  ></ProductSection>
    
    <Research prop={"flex"} col={"black"} text={"Research/Publications"}  resourse={main} val={`I presented the paper "Smart Wastebin for Smart Cities Using Internet of Things: A Waste Detection and Collection System" at the International Conference on Sustainable Computing and Integrated Communication in Changing Landscape of AI (ICSCAI-2024) at Lloyd Institute of Engineering & Technology, Greater Noida.`}></Research>
    <Social/>
    <Research prop={"flex flex-row-reverse justify-center"} col={"black"} text={"Rewards/Awards"} val={"Grateful to be honored as the Branch Topper (AIML) at Dronacharya Group of Institutions. This incredible achievement wouldn't have been possible without the guidance and support of my amazing teachers. Forever grateful and ready to make my mark! 💫🎓"} resourse={"https://media.licdn.com/dms/image/C4D22AQFNAD8sqUayEg/feedshare-shrink_800/0/1671890911545?e=1723680000&v=beta&t=sE_OCDAjwPP4M5yqB6voKJKanR2zAZZCO2xRqNxSilY"}></Research>
    <Research prop={"justify-center"} col={"black"} text={"Training/Interaction"} resourse={'https://media.licdn.com/dms/image/D5622AQEi21FllYj_IA/feedshare-shrink_1280/0/1713548988720?e=1723680000&v=beta&t=g3kFeCc2_GGwpV3pbYawsX3rbAuKJiKyo0-VLa5Tlk8' } val={"Absolutely delighted to announce the successful completion of an enriching AI training program at Kendriya Vidyalaya Ghaziabad, which concluded during the last week of March, blending both online and offline modes. Under the visionary guidance of Prof Kalpana Jha and supported by the dynamic team consisting of Yashika Goyal , Harsh Khurana , Mohd Azeem Malik 🌟"}></Research>
    </>
  )
}

export default About
