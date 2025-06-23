
import React from 'react';
import { Github, Eye, Heart, Music, FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Third Eye - Emotion Recognition System',
      description: 'A real-time emotion and engagement recognition system for online learning environments. Leverages deep learning techniques and computer vision to detect faces, classify emotions, and assess participant engagement. Built with Convolutional Neural Networks (CNN) for emotion recognition and OpenCV for face and eye tracking.',
      image: '/lovable-uploads/8e05b7b2-fc1a-4674-81c6-391738fb0dfc.png',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'CNN', 'Computer Vision'],
      github: 'https://github.com/Sujith-2508/thirdeye',
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: 'Ischaemic Heart Disease Detection',
      description: 'AI-based system for early detection of Ischaemic Heart Disease using Machine Learning techniques. Implements Extreme Gradient Boosting (XGBoost) for analyzing patient medical records with a Python backend for data processing and API integration, and HTML/CSS frontend for user interaction.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      tech: ['Python', 'XGBoost', 'Machine Learning', 'HTML', 'CSS'],
      github: 'https://github.com/Sujith-2508/Ischaemic-Heart-Disease-Detection',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'News Summarizer',
      description: 'Intelligent news summarization system that processes and condenses news articles using natural language processing techniques to provide quick, digestible summaries.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop',
      tech: ['Python', 'NLP', 'Machine Learning', 'Text Processing'],
      github: 'https://github.com/Sujith-2508/news-summarizer',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'SoundFX - AI Sound Generation',
      description: 'Developed an innovative sound generation tool using Generative Adversarial Networks (GANs) to transform user-recorded voice inputs into customizable sound effects. Designed an intuitive interface that allows users to easily record, modify, and export unique audio experiences for applications in gaming, film, and music production.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      tech: ['Python', 'GANs', 'Deep Learning', 'Signal Processing'],
      github: 'https://github.com/Sujith-2508/SoundFX',
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
                    className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
