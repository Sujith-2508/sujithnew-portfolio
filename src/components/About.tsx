
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
              Hello! I'm John Doe, a passionate Full Stack Developer.
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with 5+ years of experience in creating 
              robust web applications. I specialize in modern JavaScript frameworks and 
              have a passion for clean, efficient code.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development started with a curiosity about how websites work, 
              and it has evolved into a career where I get to solve complex problems and 
              build amazing digital experiences.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good book with a cup of coffee.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Name:</h4>
                <p className="text-gray-300">John Doe</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Experience:</h4>
                <p className="text-gray-300">5+ Years</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Location:</h4>
                <p className="text-gray-300">New York, USA</p>
              </div>
              <div>
                <h4 className="text-purple-400 font-semibold mb-2">Email:</h4>
                <p className="text-gray-300">john@example.com</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center text-6xl font-bold text-white">
                    JD
                  </div>
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
