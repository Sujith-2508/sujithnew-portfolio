
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* AI/ML Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
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
            
            <p className="text-lg text-gray-400 mb-8 animate-fade-in">
              Building intelligent systems with Machine Learning and Deep Learning. 
              Passionate about computer vision, neural networks, and creating AI solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View My Projects
              </button>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Profile Photo - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-gray-800 flex items-end justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/ce17cf49-220e-4943-8daf-54c2961ce496.png" 
                    alt="Sujith Babu M"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
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
