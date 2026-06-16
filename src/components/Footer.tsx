import { Link } from 'react-router-dom';
import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Rustem Aisariyev</p>
          <p className="footer__line">
            Software engineer  Arlington, VA  {year}
          </p>
        </div>
        <nav className="footer__links" aria-label="Footer">
          {/* TODO: replace # with your real profiles */}
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
