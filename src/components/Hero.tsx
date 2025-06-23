
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "AI & ML Enthusiast Building intelligent systems";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openGithub = () => {
    window.open('https://github.com/Sujithbabu-m', '_blank');
  };

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/sujithbabu2508/', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* AI/ML Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="text-center px-4 relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Sujith Babu M
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 h-16 mb-4">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-purple-400 font-semibold">
            Transforming data into AI-powered solutions
          </p>
        </div>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in">
          Building intelligent systems with Machine Learning and Deep Learning. 
          Passionate about computer vision, neural networks, and creating AI solutions that make a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Projects
          </button>
          <div className="flex gap-2">
            <button 
              onClick={openGithub}
              className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              GitHub
            </button>
            <button 
              onClick={openLinkedin}
              className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              LinkedIn
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout}>
            <ChevronDown size={32} className="text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
