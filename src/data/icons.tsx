import React from 'react';
import { 
  UserCircle2, 
  CodeSquare,
  Briefcase,
  MessageSquareMore,
  Settings2,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from 'lucide-react';

export const icons = [
  {
    id: 'about',
    name: 'About Me',
    icon: <UserCircle2 size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: true,
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <CodeSquare size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: true,
    gradient: 'from-green-500 to-teal-500'
  },
  {
    id: 'projects',
    name: 'Projects',
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: true,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: <MessageSquareMore size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: true,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: <Settings2 size={32} strokeWidth={1.5} />,
    showOnDesktop: false,
    showInTaskbar: true,
    gradient: 'from-gray-500 to-slate-500'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <GithubIcon size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: false,
    externalLink: 'https://github.com/yourusername',
    gradient: 'from-gray-700 to-gray-900'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: <LinkedinIcon size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: false,
    externalLink: 'https://linkedin.com/in/yourusername',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: <TwitterIcon size={32} strokeWidth={1.5} />,
    showOnDesktop: true,
    showInTaskbar: false,
    externalLink: 'https://twitter.com/yourusername',
    gradient: 'from-sky-400 to-sky-600'
  }
];