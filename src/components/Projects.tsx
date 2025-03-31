import React, { useState } from 'react';
import { X } from 'lucide-react';

// Define the Project interface
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
  longDescription: string;
  features: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "EduGuide",
    description: "AI-powered intelligent teaching system with interactive avatars and automated question paper generation using Bloom's Taxonomy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["AI", "React", "Python"],
    color: "from-blue-500 to-purple-500",
    longDescription: "EduGuide is an innovative AI-powered teaching platform that revolutionizes the way educators create and deliver content. The system features interactive avatars that engage students in personalized learning experiences, while the automated question paper generation system utilizes Bloom's Taxonomy to ensure comprehensive assessment coverage. Key features include real-time student progress tracking, adaptive learning paths, and detailed analytics for educators.",
    features: ["Interactive AI Avatars", "Automated Assessment Generation", "Real-time Progress Tracking", "Adaptive Learning Paths"],
    technologies: ["React", "Python", "TensorFlow", "Natural Language Processing", "OpenAI API"]
  },
  {
    title: "Enhancing Audio Clarity",
    description: "Developed a CNN model to detect and remove disfluencies in speech, improving audio clarity.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    tags: ["CNN", "Python", "AI"],
    color: "from-cyan-400 to-teal-400",
    longDescription: "This project focuses on improving audio quality by automatically detecting and removing speech disfluencies. Using a sophisticated Convolutional Neural Network (CNN) model, the system can identify and clean up various types of speech imperfections, making audio content more professional and easier to understand.",
    features: ["Real-time Processing", "Multiple Language Support", "Custom Training Options", "Batch Processing"],
    technologies: ["Python", "TensorFlow", "Keras", "Signal Processing", "WebRTC"]
  },
  {
    title: "CPU Scheduling Algorithm Simulator",
    description: "A simulator for visualizing and evaluating various CPU scheduling algorithms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["C++", "Algorithms", "Simulation"],
    color: "from-orange-500 to-red-500",
    longDescription: "An educational tool that provides visual demonstrations of different CPU scheduling algorithms. Users can input process parameters and observe how different scheduling algorithms handle process execution, helping students and professionals understand the intricacies of operating system process management.",
    features: ["Interactive Visualization", "Multiple Algorithm Support", "Performance Metrics", "Custom Process Creation"],
    technologies: ["C++", "Qt Framework", "Data Structures", "Algorithm Implementation"]
  },
  {
    title: "Fall Responsive Door Lock",
    description: "IoT-based emergency door unlocking system triggered by fall detection.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["IoT", "Python", "Embedded Systems"],
    color: "from-green-400 to-yellow-400",
    longDescription: "An innovative IoT solution designed to enhance safety for elderly and vulnerable individuals. The system uses advanced fall detection algorithms and sensors to automatically unlock doors in case of emergencies, while also notifying caregivers and emergency contacts.",
    features: ["Real-time Fall Detection", "Automatic Door Control", "Emergency Notifications", "Remote Monitoring"],
    technologies: ["Raspberry Pi", "Python", "Accelerometer Sensors", "IoT Protocols", "Mobile App Integration"]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative bg-[#0a0225] py-32 overflow-hidden" id="projects">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow delay-300"></div>
        <div className="absolute top-40 left-1/3 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-[96px] animate-pulse-slow delay-500"></div>
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#17175b2e_1px,transparent_1px),linear-gradient(to_bottom,#17175b2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ff000012,transparent)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
          Explore our innovative solutions across various domains, from AI-powered education to IoT security systems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Premium Card Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${project.color} blur-xl transition-opacity duration-500`}></div>
              <div className="absolute inset-px rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Project Image */}
              <div className="aspect-video overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Project Content */}
              <div className="relative z-10 mt-6">
                <h3 className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.color} tracking-tight`}>
                  {project.title}
                </h3>
                <p className="text-gray-400 mt-3 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 text-white backdrop-blur-sm transform hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.1)]`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal with Scrollable Content */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative bg-[#0a0225] rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-all duration-500 scale-100 opacity-100">
            {/* Close Button - Fixed Position */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(null);
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 z-20"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto custom-scrollbar">
              {/* Project Image with Overlay */}
              <div className="h-72 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0225] to-transparent z-10"></div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 -mt-20 relative z-20">
                <h3 className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${selectedProject.color} mb-6`}>
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Features */}
                <div className="mt-12">
                  <h4 className="text-2xl font-semibold text-white mb-6">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <li 
                        key={index}
                        className="flex items-center text-gray-300 bg-white/5 rounded-lg p-4 backdrop-blur-sm"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedProject.color} mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-12 pb-4">
                  <h4 className="text-2xl font-semibold text-white mb-6">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${selectedProject.color} bg-opacity-10 text-white backdrop-blur-sm border border-white/10`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s infinite;
        }
        `
      }} />
    </div>
  );
}