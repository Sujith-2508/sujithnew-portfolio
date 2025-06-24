
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "AI & ML Enthusiast";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
                Sujith Babu M
              </h1>
              <div className="text-xl md:text-2xl text-blue-400 font-semibold h-16 mb-6">
                {displayText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transforming data into AI-powered solutions. Building intelligent systems with Machine Learning and Deep Learning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                View Projects
              </button>
              <button 
                onClick={scrollToContact}
                className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 font-semibold"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          {/* Profile Photo - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/56835657-22d9-436d-9d5e-1dd269f4e220.png" 
                  alt="Sujith Babu M"
                  className="w-full h-full object-cover"
                />
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
