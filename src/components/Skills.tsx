
import React, { useState, useEffect, useRef } from 'react';
import { Brain, Database, Code, Cpu, Eye, BarChart3, GitBranch, Terminal } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'Python', level: 95 },
    { name: 'Computer Vision', level: 80 },
    { name: 'Data Science', level: 85 },
    { name: 'TensorFlow/Keras', level: 80 },
    { name: 'PyTorch', level: 75 },
    { name: 'OpenCV', level: 85 },
  ];

  const technologies = [
    { name: 'Python', icon: <Code className="w-6 h-6" /> },
    { name: 'TensorFlow', icon: <Brain className="w-6 h-6" /> },
    { name: 'Keras', icon: <Brain className="w-6 h-6" /> },
    { name: 'PyTorch', icon: <Brain className="w-6 h-6" /> },
    { name: 'OpenCV', icon: <Eye className="w-6 h-6" /> },
    { name: 'Scikit-learn', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'NumPy', icon: <Database className="w-6 h-6" /> },
    { name: 'Pandas', icon: <Database className="w-6 h-6" /> },
    { name: 'Matplotlib', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Jupyter', icon: <Terminal className="w-6 h-6" /> },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* AI/ML Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 border border-pink-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI & ML Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-purple-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div key={tech.name} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-purple-400 group-hover:text-white transition-colors">
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <h4 className="text-purple-400 font-semibold mb-2">Natural Language Processing</h4>
              <p className="text-gray-300 text-sm">Simplilearn - 2025</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <h4 className="text-purple-400 font-semibold mb-2">Data Structures & Algorithms</h4>
              <p className="text-gray-300 text-sm">Udemy - 2023</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300">
              <h4 className="text-purple-400 font-semibold mb-2">Database Engineering</h4>
              <p className="text-gray-300 text-sm">Udemy - 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
