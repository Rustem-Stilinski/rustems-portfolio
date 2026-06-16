import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { NavItem } from '../types';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const links: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/interests', label: 'Interests' },
  { path: '/resume', label: 'Resume' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/geolocation', label: 'Geolocation' },
  { path: '/guestbook', label: 'Guestbook' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="nav">
      <div className="container nav__bar">
        <NavLink to="/" className="nav__brand" aria-label="Home">
          <span className="nav__mark" aria-hidden="true" />
          Rustem<span className="nav__brand-dim">.dev</span>
        </NavLink>

        <button
          className="nav__burger"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`nav__burger-bars ${open ? 'is-open' : ''}`} />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav__link ${isActive ? 'is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
