import React from 'react';
import { 
  Code2, Database, Globe2, Cpu, Palette, 
  LineChart, Cloud, Shield, Smartphone 
} from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    name: "Frontend Development",
    level: 95,
    color: "from-blue-500 to-cyan-500",
    technologies: ["React", "Vue", "Next.js", "TypeScript"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    name: "Backend Development",
    level: 90,
    color: "from-purple-500 to-pink-500",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    name: "Web Performance",
    level: 85,
    color: "from-green-500 to-emerald-500",
    technologies: ["Webpack", "Vite", "PWA", "SEO"]
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    name: "System Architecture",
    level: 88,
    color: "from-orange-500 to-red-500",
    technologies: ["Microservices", "Docker", "AWS", "Azure"]
  },
  {
    icon: <Palette className="w-8 h-8" />,
    name: "UI/UX Design",
    level: 92,
    color: "from-pink-500 to-rose-500",
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle"]
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    name: "Analytics",
    level: 87,
    color: "from-violet-500 to-purple-500",
    technologies: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    name: "Cloud Services",
    level: 89,
    color: "from-cyan-500 to-blue-500",
    technologies: ["AWS", "GCP", "Azure", "Vercel"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    name: "Security",
    level: 86,
    color: "from-red-500 to-orange-500",
    technologies: ["OAuth", "JWT", "HTTPS", "Web Security"]
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    name: "Mobile Development",
    level: 84,
    color: "from-emerald-500 to-green-500",
    technologies: ["React Native", "Flutter", "iOS", "Android"]
  }
];

export default function Skills() {
  return (
    <div className="relative bg-[#0a0225] py-32 overflow-hidden" id="technical">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow delay-300"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#17175b2e_1px,transparent_1px),linear-gradient(to_bottom,#17175b2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ff000012,transparent)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Technical Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${skill.color} blur-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="mb-4">
                  <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-400 text-sm">Proficiency</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${skill.color} bg-opacity-10 text-white backdrop-blur-sm transform hover:scale-105 transition-transform duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}