import React from 'react';
import aboutData from '../../data/about.json';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <div className="about-content">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img 
            src={aboutData.photo} 
            alt={aboutData.name} 
            className="w-full h-auto rounded-lg shadow-md"
          />
          
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} />
              <a href={`mailto:${aboutData.email}`} className="text-blue-600 hover:underline">
                {aboutData.email}
              </a>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <Phone size={16} />
              <span>{aboutData.phone}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} />
              <span>{aboutData.location}</span>
            </div>
            
            <div className="mt-4 flex gap-3">
              {Object.entries(aboutData.social).map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-700 rounded-full shadow hover:shadow-md transition-shadow"
                >
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-1">{aboutData.name}</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-4">{aboutData.title}</h2>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm mb-6">
            <p className="leading-relaxed">{aboutData.bio}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">Experience</h3>
            
            {aboutData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-medium">{exp.position}</h4>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{exp.company}</span>
                  <span>{exp.period}</span>
                </div>
                <p className="mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 border-b pb-2">Education</h3>
            
            {aboutData.education.map((edu, index) => (
              <div key={index} className="mb-2">
                <h4 className="text-lg font-medium">{edu.degree}</h4>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{edu.institution}</span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;