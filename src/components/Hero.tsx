import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, Code, Cpu, Palette, Globe, Phone, Menu, X } from 'lucide-react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false);
      setTimeout(() => {
        setRefreshKey(prev => prev + 1);
        setImageLoaded(true);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 96; // Height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0225] overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse-slow delay-300"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#17175b2e_1px,transparent_1px),linear-gradient(to_bottom,#17175b2e_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ff000012,transparent)]"></div>
      </div>

      {/* Enhanced Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0225]/95 backdrop-blur-lg shadow-lg shadow-black/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="relative z-10">
              <span className="text-3xl font-bold relative">
                <span className="absolute -inset-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></span>
                <span className="relative bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">BK</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavLink href="#home" label="Home" onClick={(e) => handleNavClick(e, 'home')} />
              <NavLink href="#education" label="Education" onClick={(e) => handleNavClick(e, 'education')} />
              <NavLink href="#projects" label="Projects" onClick={(e) => handleNavClick(e, 'projects')} />
              <NavLink href="#technical" label="TechEdge" onClick={(e) => handleNavClick(e, 'technical')} />
              <NavLink href="#gallery" label="Gallery" onClick={(e) => handleNavClick(e, 'gallery')} />
              <NavLink href="#about" label="About Me" onClick={(e) => handleNavClick(e, 'about')} />      
              
              <a
                href="mailto:k.bhumisvara@gmail.com"
                className="ml-6 px-8 py-3 text-sm font-medium text-white relative group overflow-hidden rounded-lg"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:scale-110 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Connect <Mail className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0225]/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="container mx-auto px-8 py-6 space-y-3">
            <MobileNavLink href="#home" label="Home" onClick={(e) => handleNavClick(e, 'home')} />
            <MobileNavLink href="#projects" label="Projects" onClick={(e) => handleNavClick(e, 'projects')} />
            <MobileNavLink href="#education" label="Education" onClick={(e) => handleNavClick(e, 'education')} />
            <MobileNavLink href="#technical" label="TechEdge" onClick={(e) => handleNavClick(e, 'technical')} />
            <MobileNavLink href="#gallery" label="Gallery" onClick={(e) => handleNavClick(e, 'gallery')} />
            <MobileNavLink href="#about" label="About Me" onClick={(e) => handleNavClick(e, 'about')} />
            <a
              href="mailto:k.bhumisvara@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3.5 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-blue-500 rounded-lg hover:opacity-90 transition-opacity duration-300 text-center mt-6"
            >
              Connect
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-16 transform transition-all duration-700 translate-y-0 opacity-100">
            <div className="space-y-6">
              <h2 className="text-xl text-gray-400 animate-fade-in">Hello, I am</h2>
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="block animate-name-glow bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Bhumisvara K
                </span>             
              </h1>
              <h3 className="text-2xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent font-semibold animate-slide-up">
                Software Developer
              </h3>
            </div>
            
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed animate-fade-in">
              A passionate <span className="text-red-500">Computer Science Engineer</span> with expertise in creating innovative solutions. Specializing in full-stack development, UI/UX design, and AI integration.
            </p>

            {/* Skills Section */}
            <div className="grid grid-cols-2 gap-8" id="skills">
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Code className="w-7 h-7 text-blue-400" />
                <span className="text-gray-300">Full Stack Development</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Cpu className="w-7 h-7 text-purple-400" />
                <span className="text-gray-300">AI & Machine Learning</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Palette className="w-7 h-7 text-pink-400" />
                <span className="text-gray-300">UI/UX Design</span>
              </div>
              <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 flex items-center gap-4 group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <Globe className="w-7 h-7 text-green-400" />
                <span className="text-gray-300">Cloud Solutions</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-400">Find Me on</p>
              <div className="flex gap-6">
                <a href="https://github.com/Bhumisvara2k" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#2b3137] transition-all duration-300 group hover:scale-110">
                  <Github className="w-7 h-7 text-[#2b3137] group-hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/bhumisk" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 group hover:scale-110">
                  <Linkedin className="w-7 h-7 text-[#0077b5] group-hover:text-white" />
                </a>
                <a href="https://www.instagram.com/bhumisvarak" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#e4405f] transition-all duration-300 group hover:scale-110">
                  <Instagram className="w-7 h-7 text-[#e4405f] group-hover:text-white" />
                </a>
                <a href="https://wa.me/+919345050311" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 group hover:scale-110">
                  <Phone className="w-7 h-7 text-[#25D366] group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative transform transition-all duration-700 translate-x-0 opacity-100">
            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,#ff000012_0%,transparent_50%)]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-red-500/20 rounded-full animate-reverse-spin"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-2 border-purple-500/20 rounded-full animate-reverse-spin"></div>
            </div>

            {/* Profile Image Container */}
            <div key={refreshKey} className={`relative z-10 w-[400px] h-[500px] mx-auto transform transition-all duration-1000 ${imageLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {/* Glass Effect Background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl"></div>
              
              {/* Image Container */}
              <div className="relative h-full overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(255,0,0,0.1)] group transition-all duration-500 hover:scale-105">
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-80"></div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/10 group-hover:border-red-500/30 transition-colors duration-500"></div>
                
                {/* The Image */}
                <img 
                  src="https://images.unsplash.com/photo-1743362581264-82485cb4f000?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

// Navigation Link Component
function NavLink({ href, label, onClick }: { href: string; label: string; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-5 py-2.5 text-sm font-medium text-white/70 hover:text-white relative group"
    >
      {label}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
    </a>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-300"
    >
      {label}
    </a>
  );
}