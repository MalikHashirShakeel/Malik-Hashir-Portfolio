import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-dark text-white p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="hover:underline">About Me</Link></li>
        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
