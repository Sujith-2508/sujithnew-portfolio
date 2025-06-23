
import React from 'react';
import { ExternalLink, Github, Eye, Heart, Music, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Third Eye - Emotion Recognition System',
      description: 'Real-time emotion and engagement recognition system for online learning environments. Uses CNN for emotion recognition and OpenCV for face tracking with instant feedback for educators.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
      github: 'https://github.com/Sujith-2508/thirdeye',
      demo: '#',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Ischaemic Heart Disease Detection',
      description: 'AI-based system for early detection of Ischaemic Heart Disease using Machine Learning. Features Python backend with HTML/CSS frontend and leverages medical datasets for accurate predictions.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      tech: ['Python', 'Machine Learning', 'HTML', 'CSS'],
      github: 'https://github.com/Sujith-2508/Ischaemic-Heart-Disease-Detection',
      demo: '#',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'News Summarizer',
      description: 'Intelligent news summarization system that processes and condenses news articles using natural language processing techniques to provide quick, digestible summaries.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop',
      tech: ['Python', 'NLP', 'Machine Learning', 'Text Processing'],
      github: 'https://github.com/Sujith-2508/news-summarizer',
      demo: '#',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'SoundFX - Audio Processing',
      description: 'Advanced audio processing and effects system that applies various sound effects and transformations. Built with focus on real-time audio manipulation and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      tech: ['Python', 'Audio Processing', 'Signal Processing', 'UI/UX'],
      github: 'https://github.com/Sujith-2508/SoundFX',
      demo: '#',
      icon: <Music className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* AI/ML Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-64 h-1 bg-gradient-to-r from-purple-500 to-transparent rotate-45"></div>
        <div className="absolute bottom-40 left-10 w-64 h-1 bg-gradient-to-r from-blue-500 to-transparent -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI & ML Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-purple-500">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-white hover:text-purple-400 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href={project.demo} className="text-white hover:text-purple-400 transition-colors">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-purple-500/20 backdrop-blur-sm rounded-lg p-2">
                  <div className="text-purple-400">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-purple-400 font-semibold mb-2">Skillrack</h4>
              <p className="text-gray-300 text-sm">450+ Problems Solved</p>
              <p className="text-gray-400 text-xs">Bronze Level</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-purple-400 font-semibold mb-2">ML Poster</h4>
              <p className="text-gray-300 text-sm">2nd Position</p>
              <p className="text-gray-400 text-xs">ML Use Cases - 2024</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-purple-400 font-semibold mb-2">Code Crafters</h4>
              <p className="text-gray-300 text-sm">1st Position</p>
              <p className="text-gray-400 text-xs">KPRIET HackerRank - 2024</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-purple-400 font-semibold mb-2">Handball</h4>
              <p className="text-gray-300 text-sm">District Level Player</p>
              <p className="text-gray-400 text-xs">Sports Achievement - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
