
import React from 'react';
import { Brain, Database, Code, Cpu, Eye, BarChart3, GitBranch, Terminal, Bot, Zap, Activity, Network } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Machine Learning', icon: <Brain className="w-5 h-5" /> },
        { name: 'Deep Learning', icon: <Activity className="w-5 h-5" /> },
        { name: 'TensorFlow', icon: <Zap className="w-5 h-5" /> },
        { name: 'PyTorch', icon: <Brain className="w-5 h-5" /> },
        { name: 'Natural Language Processing', icon: <Brain className="w-5 h-5" /> },
        { name: 'Computer Vision', icon: <Eye className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Programming & Data',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Python', icon: <Code className="w-5 h-5" /> },
        { name: 'C', icon: <Terminal className="w-5 h-5" /> },
        { name: 'NumPy', icon: <Database className="w-5 h-5" /> },
        { name: 'Pandas', icon: <Database className="w-5 h-5" /> },
        { name: 'Scikit-learn', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Data Structures & Algorithms', icon: <Network className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Data Science & Visualization',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Data Analysis', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Tableau', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'PowerBI', icon: <BarChart3 className="w-5 h-5" /> },
        { name: 'Data Visualization', icon: <BarChart3 className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      skills: [
        { name: 'MySQL', icon: <Database className="w-5 h-5" /> },
        { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
        { name: 'Git & GitHub', icon: <GitBranch className="w-5 h-5" /> },
        { name: 'VS Code', icon: <Terminal className="w-5 h-5" /> },
        { name: 'API Integration', icon: <Network className="w-5 h-5" /> }
      ]
    }
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-700 rounded-lg p-3 flex items-center space-x-3 hover:bg-gray-600 transition-colors duration-300">
                    <div className="text-purple-400">
                      {skill.icon}
                    </div>
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
