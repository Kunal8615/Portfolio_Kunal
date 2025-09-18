import React from "react";

function Footer(){
return(
    <>
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="text-white sm:col-span-2">
            <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center group">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-lg">K</span>
              </div>
              <span className="ml-3 text-xl font-bold tracking-wide text-white group-hover:text-orange-400 transition-colors duration-300">
                Kunal.In
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-gray-300 leading-relaxed">
                Thanks for visiting my portfolio! I'm passionate about creating innovative web solutions and exploring the latest technologies. Feel free to connect with me.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-bold tracking-wide text-white mb-4">Contact Info</p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:9625661737" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">+91 9625661737</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:kk811464@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">kk811464@gmail.com</a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-orange-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300">Palam, New Delhi</span>
              </div>
            </div>
          </div>
          <div>
            <span className="text-lg font-bold tracking-wide text-white mb-4 block">Follow Me</span>
            <div className="flex items-center space-x-4">
              <a href="https://x.com/kk811464" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/kunal_8615/" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6 w-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
                </svg>
              </a>
              <a href="https://github.com/Kunal8615" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/kunal-1a4983228/" className="text-gray-300 hover:text-orange-400 transition-all duration-300 hover:scale-110">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Let's connect and collaborate!
            </p>
          </div>
  </div>
        <div className="flex flex-col-reverse justify-between pt-8 pb-4 border-t border-gray-800 lg:flex-row">
          <p className="text-sm text-gray-400 mt-4 lg:mt-0">
            © Copyright 2024 Kunal.in. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="/about" className="hover:text-orange-400 transition-colors duration-300">About</a>
            <a href="/project" className="hover:text-orange-400 transition-colors duration-300">Projects</a>
            <a href="/Skill" className="hover:text-orange-400 transition-colors duration-300">Skills</a>
          </div>
        </div>
      </div>
    </footer>
    </>
)
}

export default Footer;