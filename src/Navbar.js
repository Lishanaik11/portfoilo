import React, { useContext } from 'react';
import { ThemeContext } from './theme';

function Navbar({ onNav }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <a href="#" className="nav-link" onClick={() => onNav('home')}>
        About Me
      </a>
      <a href="#" className="nav-link" onClick={() => onNav('projects')}>
        Projects
      </a>
      <a href="#" className="nav-link" onClick={() => onNav('contact')}>
        Contact
      </a>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </nav>
  );
}

export default Navbar;