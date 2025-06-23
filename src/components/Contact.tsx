
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* AI/ML Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Collaborate on AI Projects</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always excited to discuss AI & ML projects, research opportunities, and innovative solutions. 
              Whether you're looking for collaboration on machine learning projects or have an interesting AI challenge, 
              I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">sujithbabu2004@gmail.com</p>
                  <p className="text-gray-400 text-sm">sujithbabu.m2022ai-ds@sece.ac.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">+91 9488705044</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Sujithbabu-m" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-colors group"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sujithbabu2508/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border border-gray-600 focus:border-purple-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border border-gray-600 focus:border-purple-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all border border-gray-600 focus:border-purple-500"
                  placeholder="AI Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none border border-gray-600 focus:border-purple-500"
                  placeholder="Tell me about your AI/ML project or collaboration idea..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 Sujith Babu M. All rights reserved. Built with passion for AI & ML.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
