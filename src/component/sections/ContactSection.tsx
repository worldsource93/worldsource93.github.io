import { contactData } from '@src/data/contact';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaBlog, FaLinkedin, FaGithub } from 'react-icons/fa';

const getIcon = (title: string) => {
  switch (title) {
    case 'Email':
      return <MdEmail size={24} />;
    case 'Blog':
      return <FaBlog size={24} />;
    case 'LinkedIn':
      return <FaLinkedin size={24} />;
    case 'Github':
      return <FaGithub size={24} />;
    default:
      return null;
  }
};

const ContactSection: React.FC = () => (
  <section id="contact">
    <h2 className="section__title">Contact</h2>
    <div className="contact__grid">
          {contactData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="contact__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact__icon">
                {getIcon(item.title)}
              </div>
              <span className="contact__label">{item.title}</span>
            </a>
          ))}
        </div>
  </section>
);

export default ContactSection; 