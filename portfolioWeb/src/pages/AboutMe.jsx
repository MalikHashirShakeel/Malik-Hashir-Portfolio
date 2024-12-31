import React from "react";
import { FaGithub, FaLinkedin, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // Import icons from react-icons
import { SiDjango, SiSqlite } from "react-icons/si"; // Django, SQLite icons

const skills = [
  {
    name: "Python",
    level: 100,
    info: "Experienced in scripting, automation, and backend development.",
    logo: <FaPython className="text-yellow-500 text-4xl" />, // Python Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "HTML",
    level: 100,
    info: "Strong foundation in semantic HTML and web standards.",
    logo: <FaHtml5 className="text-orange-500 text-4xl" />, // HTML Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "CSS",
    level: 80,
    info: "Proficient in modern CSS, responsive design, and animations.",
    logo: <FaCss3Alt className="text-blue-500 text-4xl" />, // CSS Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "JavaScript",
    level: 95,
    info: "Skilled in ES6+, DOM manipulation, and frameworks like React.",
    logo: <FaJs className="text-yellow-500 text-4xl" />, // JavaScript Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "Django",
    level: 75,
    info: "Experienced in building secure, scalable web applications.",
    logo: <SiDjango className="text-green-500 text-4xl" />, // Django Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "DSA (Python)",
    level: 90,
    info: "Solid understanding of algorithms and data structures in Python.",
    logo: <FaPython className="text-yellow-500 text-4xl" />, // Python DSA Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "React",
    level: 90,
    info: "Experienced in building interactive UIs using React.",
    logo: <FaReact className="text-cyan-400 text-4xl" />, // React Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "SQLite 3",
    level: 85,
    info: "Familiar with relational database design and queries.",
    logo: <SiSqlite className="text-blue-400 text-4xl" />, // SQLite Logo
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    name: "OOP (Python)",
    level: 95,
    info: "Strong knowledge of object-oriented programming concepts.",
    logo: <FaPython className="text-yellow-500 text-4xl" />, // Python Logo for OOP
    github: "https://github.com/MalikHashirShakeel",
    linkedin: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
];

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Personal Image */}
        <div className="flex justify-center mb-8">
          <img
            src="/profile.jpg" // Replace with your image path
            alt="Ahmed Siddiqui"
            className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg transform transition-all hover:scale-105"
          />
        </div>

        {/* About Me Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-400">About Me</h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
        Hello! I'm Malik Hashir Shakeel, currently in my 4th semester at the Department of Computer and Information Systems Engineering at NED University of Engineering and Technology. I am maintaining a CGPA of 3.8 and have developed a strong command over various technologies and programming languages, including Python, HTML, CSS, JavaScript, Django, DSA (Python), React, SQLite 3, and OOP (Python).

I have a deep passion for learning and exploring new technologies. My interest has grown towards Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL), and I am constantly looking to expand my knowledge and expertise in these fields. With a firm belief in continuous learning and improvement, I aim to build innovative solutions and contribute meaningfully to the tech world.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-purple-300">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 border-4 ${
                skill.name === "Python"
                  ? "border-yellow-500"
                  : skill.name === "HTML"
                  ? "border-orange-500"
                  : skill.name === "CSS"
                  ? "border-blue-500"
                  : skill.name === "JavaScript"
                  ? "border-yellow-500"
                  : skill.name === "Django"
                  ? "border-green-500"
                  : skill.name === "React"
                  ? "border-cyan-400"
                  : skill.name === "SQLite 3"
                  ? "border-blue-400"
                  : "border-gray-500"
              }`}
            >
              {/* Skill Name, Logo and Slider */}
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{skill.logo}</div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="relative mt-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={skill.level}
                    readOnly
                    className="w-full h-3 rounded-full bg-transparent appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #1a202c ${skill.level}%, #d1d1d1 ${skill.level}%)`, // Matching web background color
                    }}
                  />
                </div>
                <div className="absolute top-1 right-4 text-white font-bold text-sm">
                  {skill.level}%
                </div>
              </div>

              {/* Hover info */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                <p className="text-sm text-white">{skill.info}</p>
                <div className="mt-4 flex justify-center">
                  <a
                    href={skill.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 mx-2 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={skill.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 mx-2 transition-colors duration-200"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode Solved Problems Section */}
        <div className="mt-12 mb-8 p-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-xl text-center">
          <h3 className="text-3xl font-semibold text-white">LeetCode Solved Problems</h3>
          <p className="text-2xl text-white mt-4">190+ Solved</p>
        </div>

        {/* LinkedIn and GitHub Icons at the Bottom */}
        <div className="flex justify-center mt-12 space-x-6">
          <a
            href="https://github.com/MalikHashirShakeel" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 text-4xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/malik-hashir-53a15a294/' // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 text-4xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
