
import React, { useState, useEffect } from 'react';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I'm an AI & ML enthusiast with a passion for building intelligent systems that solve real-world problems. My focus is on developing machine learning models and deep learning applications that transform raw data into valuable insights and automated solutions. I'm dedicated to pushing the boundaries of what's possible with artificial intelligence and robotics technologies.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-8 text-white">
              Who I Am
            </h3>
            <div className="text-gray-300 mb-8 leading-relaxed text-lg min-h-[200px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://github.com/Sujithbabu-m"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/sujithbabu2508/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
