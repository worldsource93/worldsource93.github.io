import React, { useState } from 'react';
import wonDevLogo from '@src/assets/won_dev_logo.svg';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const MENU = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: '기술' },
  { id: 'career', label: '경력' },
  { id: 'projects', label: '프로젝트' },
  { id: 'lectures', label: '강의' },
  { id: 'contact', label: 'Contact' },
  // { id: 'demo', label: 'Demo' },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (_: React.MouseEvent<HTMLButtonElement>, menu: typeof MENU[number]) => {
    setIsMenuOpen(false);
    if (menu.id !== 'demo') {
      navigate('/');
      setTimeout(() => scrollToSection(menu.id), 200);
    } else {
      navigate('/demo');
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <img
          src={wonDevLogo}
          alt="Won.dev Logo"
          className="header__logo"
          onClick={() => navigate('/')}
        />
        <ul className="header__nav-menu">
          {MENU.map(menu => (
            <li key={menu.id} className="header__nav-item">
              <button
                className="header__nav-button"
                onClick={(e) => handleMenuClick(e, menu)}
              >
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <ul className="header__mobile-menu">
          {MENU.map(menu => (
            <li key={menu.id} className="header__mobile-item">
              <button
                className="header__mobile-button"
                onClick={(e) => handleMenuClick(e, menu)}
              >
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;