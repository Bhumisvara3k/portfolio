import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "B.E. Computer Science",
    school: "Madras Institute of Technology, Chennai, Tamil Nadu",
    period: "08/2022 - Present",
    percentage: "CGPA: 7.55",
    color: "from-blue-500 to-cyan-500"
  },
  {
    degree: "Diploma in Electrical and Electronics Engineering",
    school: "Kongu Polytechnic College, Erode, Tamil Nadu",
    period: "07/2020 - 05/2022",
    percentage: "Percentage: 99%",
    color: "from-purple-500 to-pink-500"
  },
  {
    degree: "Higher Secondary",
    school: "G.V. Higher Secondary School, Salem, Tamil Nadu",
    period: "06/2018 - 03/2020",
    percentage: "Percentage: 63.33%",
    color: "from-green-500 to-emerald-500"
  },
  {
    degree: "Secondary School Leaving Certificate",
    school: "G.V. Higher Secondary School, Salem, Tamil Nadu",
    period: "06/2017 - 03/2018",
    percentage: "Percentage: 73.4%",
    color: "from-orange-500 to-red-500"
  }
];

export default function Education() {
  return (
    <div className="relative bg-[#0a0225] py-32 overflow-hidden" id="education">
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Education
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${edu.color} blur-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${edu.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                </div>
                
                <p className="text-gray-300 text-lg">{edu.school}</p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
                <p className="text-gray-300 font-medium mt-2">{edu.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}