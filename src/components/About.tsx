import React from 'react';
import { Users, Brain, Coffee, Heart, Clock, Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="relative bg-[#0a0225] py-32 overflow-hidden" id="about">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow delay-300"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#17175b2e_1px,transparent_1px),linear-gradient(to_bottom,#17175b2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ff000012,transparent)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Hi, I'm <span className="text-red-500 font-semibold">Bhumisvara K</span>, a software engineer passionate about creating innovative and efficient solutions. My expertise spans full-stack development, UI/UX design, and AI technologies.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I'm constantly exploring new technologies and frameworks to deliver user-centric, scalable, and high-performance applications. Whether it's building a complex backend system or crafting an intuitive user interface, I thrive on making ideas come to life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Team Player</h3>
              <p className="text-gray-400">Collaborating effectively in diverse teams.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Brain className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Problem Solver</h3>
              <p className="text-gray-400">I enjoy tackling challenges with creative solutions.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Coffee className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Quick Learner</h3>
              <p className="text-gray-400">Always adapting to new technologies.</p>
            </div>

            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Heart className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Passionate</h3>
              <p className="text-gray-400">Driven by love for technology.</p>
            </div>
          </div>

          {/* Time Management Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Clock className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Time Management</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Project Planning</span>
                      <span className="text-cyan-400">95%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Task Prioritization</span>
                      <span className="text-cyan-400">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl transition-opacity duration-300"></div>
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Deadline Management</span>
                      <span className="text-cyan-400">85%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">Work-Life Balance</span>
                      <span className="text-cyan-400">88%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[88%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-pink-500 to-purple-500 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-8 h-8 text-pink-400 group-hover:animate-bounce" />
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                </div>
                <a href="mailto:bhumisvara@example.com" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  k.bhumisvara@gmail.com
                </a>
              </div>
            </div>

            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-emerald-500 to-green-500 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-8 h-8 text-emerald-400 group-hover:animate-bounce" />
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                </div>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                  +91 9345050311
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;