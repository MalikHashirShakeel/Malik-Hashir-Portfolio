import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const contacts = [
  {
    platform: 'Facebook',
    logo: <FaFacebook />,
    link: 'https://www.facebook.com/profile.php?id=100077438779105',
  },
  {
    platform: 'LinkedIn',
    logo: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/malik-hashir-53a15a294/',
  },
  {
    platform: 'WhatsApp',
    logo: <FaWhatsapp />,
    link: 'https://wa.me/923143083039',
  },
  {
    platform: 'Instagram',
    logo: <FaInstagram />,
    link: 'https://www.instagram.com/itsmalikhashir/?next=%2F',
  },
];

const Contact = () => {
  return (
    <div className="bg-dark min-h-screen py-10">
      <h1 className="text-white text-4xl text-center mb-10">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-card text-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl text-primary mb-4">{contact.logo}</div>
            <h2 className="text-2xl mb-4">{contact.platform}</h2>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-dark px-4 py-2 rounded hover:bg-light-primary transition-colors duration-300"
            >
              Visit
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
