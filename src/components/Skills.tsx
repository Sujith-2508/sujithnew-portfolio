
import React from 'react';
import { Brain, Database, Code, Cpu, Eye, BarChart3, GitBranch, Terminal, Bot, Zap, Activity, Network } from 'lucide-react';

const Skills = () => {
  const technologies = [
    { name: 'Python', icon: <Code className="w-6 h-6" /> },
    { name: 'Machine Learning', icon: <Brain className="w-6 h-6" /> },
    { name: 'Deep Learning', icon: <Brain className="w-6 h-6" /> },
    { name: 'Computer Vision', icon: <Eye className="w-6 h-6" /> },
    { name: 'TensorFlow', icon: <Brain className="w-6 h-6" /> },
    { name: 'Keras', icon: <Brain className="w-6 h-6" /> },
    { name: 'PyTorch', icon: <Brain className="w-6 h-6" /> },
    { name: 'OpenCV', icon: <Eye className="w-6 h-6" /> },
    { name: 'Scikit-learn', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'NumPy', icon: <Database className="w-6 h-6" /> },
    { name: 'Pandas', icon: <Database className="w-6 h-6" /> },
    { name: 'Matplotlib', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'XGBoost', icon: <Zap className="w-6 h-6" /> },
    { name: 'GANs', icon: <Network className="w-6 h-6" /> },
    { name: 'CNNs', icon: <Network className="w-6 h-6" /> },
    { name: 'Neural Networks', icon: <Activity className="w-6 h-6" /> },
    { name: 'Robotics', icon: <Bot className="w-6 h-6" /> },
    { name: 'Data Science', icon: <BarChart3 className="w-6 h-6" /> },
    { name: 'Jupyter', icon: <Terminal className="w-6 h-6" /> },
    { name: 'Git', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6" /> },
    { name: 'NLP', icon: <Brain className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* AI/ML Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-40 h-40 border border-pink-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technologies & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-purple-400 group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors text-center">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
