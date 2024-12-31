import React from 'react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const projects = [
  {
    name: 'Weather Monitoring System',
    languages: [<FaPython />],
    description: 'A system to monitor weather conditions in real-time using C programming.',
    repo: 'https://github.com/MalikHashirShakeel/Weather-Monitoring-System',
  },
  {
    name: 'Password Generator',
    languages: [<FaReact />],
    description: 'A React application that generates secure passwords.',
    repo: 'https://github.com/MalikHashirShakeel/Password-Generator-with-React.',
  },
  {
    name: 'Todo App',
    languages: [<FaReact />],
    description: 'A simple and elegant Todo app built with React.',
    repo: 'https://github.com/MalikHashirShakeel/Todo-App',
  },
  {
    name: 'Online Shopping Application',
    languages: [<FaPython />],
    description: 'A Python-based application for online shopping with a user-friendly interface.',
    repo: 'https://github.com/MalikHashirShakeel/OOP-CEP-2024-Online-shoppingapp-',
  },
  {
    name: 'Web Page Frontend',
    languages: [<FaReact />],
    description: 'A frontend design of a webpage using React.',
    repo: 'https://github.com/MalikHashirShakeel/Simple-Web-Page-Frontend',
  },
  {
    name: 'Least Recently Used Cache',
    languages: [<FaPython />],
    description: 'Implementation of LRU cache in Python.',
    repo: 'https://github.com/MalikHashirShakeel/Least-Recently-Used-Cache',
  },
  {
    name: 'Static Registration Page',
    languages: [<FaHtml5 />, <FaCss3Alt />],
    description: 'A static registration page built using HTML and CSS.',
    repo: 'https://github.com/MalikHashirShakeel/Static-Registration-Page.',
  },
  {
    name: 'Rock Paper Scissors',
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    description: 'A simple Rock Paper Scissors game using HTML, CSS, and JavaScript.',
    repo: 'https://github.com/MalikHashirShakeel/Rock-Paper-Scissors',
  },
  {
    name: 'Tic Tac Toe',
    languages: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
    description: 'A Tic Tac Toe game using HTML, CSS, and JavaScript.',
    repo: 'https://github.com/MalikHashirShakeel/Tic-Tac-Toe-Game',
  },
];

const Projects = () => {
  return (
    <div className="bg-dark min-h-screen py-10">
      <h1 className="text-white text-4xl text-center mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card text-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl mb-2">{project.name}</h2>
            <div className="flex space-x-2 text-lg mb-4">
              {project.languages.map((Icon, idx) => (
                <span key={idx} className="text-primary">{Icon}</span>
              ))}
            </div>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-dark px-4 py-2 rounded hover:bg-light-primary transition-colors duration-300"
            >
              Visit Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
