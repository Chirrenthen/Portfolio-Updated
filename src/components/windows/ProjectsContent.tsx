import React, { useState } from 'react';
import projectsData from '../../data/projects.json';
import { ExternalLink, Github, Tags, Calendar, ArrowRight } from 'lucide-react';

const ProjectsContent: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  return (
    <div className="projects-content">
      <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Project Links - Appear on Hover */}
              <div className={`absolute inset-0 flex items-center justify-center gap-4 z-20 
                transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/80 text-white rounded-full hover:bg-black transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/80 text-white rounded-full hover:bg-black transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                {project.title}
                <ArrowRight size={18} className="transform transition-transform group-hover:translate-x-1" />
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{project.year || '2023'}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tags size={14} />
                  <span>{project.category || 'Web App'}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                      text-blue-700 dark:text-blue-300 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;