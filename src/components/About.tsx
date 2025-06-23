
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Hello! I'm Sujith Babu M, an AI & ML Enthusiast.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate AI & ML enthusiast currently pursuing B.Tech in AI&DS at 
              Sri Eshwar College of Engineering. I specialize in building intelligent systems 
              with Machine Learning and Deep Learning technologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in artificial intelligence started with a fascination for how machines 
              can learn and make decisions. I focus on transforming data into AI-powered solutions 
              that solve real-world problems, from emotion recognition to medical diagnosis.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not training models or analyzing data, you can find me exploring new 
              AI research papers, contributing to open-source projects, or participating in 
              competitive programming challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Name:</h4>
                <p className="text-gray-300">Sujith Babu M</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Field:</h4>
                <p className="text-gray-300">AI & ML</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Education:</h4>
                <p className="text-gray-300">B.Tech AI&DS</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">CGPA:</h4>
                <p className="text-gray-300">7.05</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/a719598c-142b-4d79-99e5-54c5b5a71dbb.png" 
                    alt="Sujith Babu M"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
