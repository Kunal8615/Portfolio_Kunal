import React from 'react'

const Experience = ({ 
  companyName, 
  profile, 
  startDate, 
  endDate, 
  jobRoleDescription 
}) => {
  return (
    <div className="bg-gray-900 rounded-xl shadow-2xl p-8 mb-8 mx-4 md:mx-6 lg:mx-8 border-l-4 border-blue-400 hover:shadow-blue-500/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Company Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">
              {companyName.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
              {companyName}
            </h3>
            <p className="text-lg text-blue-400 font-semibold">
              {profile}
            </p>
          </div>
        </div>
        <div className="text-right bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
          <p className="text-sm font-semibold text-gray-300">
            {startDate} - {endDate}
          </p>
          <p className="text-xs text-gray-500 mt-1">Duration</p>
        </div>
      </div>

      {/* Job Description */}
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-200">
            Job Description & Responsibilities
          </h4>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <p className="text-gray-300 leading-relaxed text-base">
            {jobRoleDescription}
          </p>
        </div>
      </div>

      {/* Skills & Technologies */}
      <div className="mt-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h4 className="text-lg font-bold text-gray-200">
            Key Technologies
          </h4>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {['JavaScript', 'Backend-Technologies', 'Platform intigration', 'SQL', 'Testing',  'Apache Superset', 'RESTful APIs'].map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm font-medium border border-gray-600 hover:bg-gray-700 hover:border-blue-500 transition-all duration-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Professional Experience
            </span>
          </div>
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
