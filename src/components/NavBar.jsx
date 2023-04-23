import { HashLink as Link } from 'react-router-hash-link';
import "../styles/NavBar.css";
import { useState, useEffect } from 'react';

function NavBar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById('about');
      const projects = document.getElementById('projects');
      const contact = document.getElementById('contact');

      if (contact && window.scrollY + window.innerHeight >= contact.offsetTop + contact.offsetHeight -200) {
        setActive('contact');
      } else if (projects && window.scrollY + window.innerHeight >= projects.offsetTop + projects.offsetHeight -100) {
        setActive('projects');
      } else if (about && window.scrollY + window.innerHeight >= about.offsetTop + about.offsetHeight - 100) {
        setActive('about');
      } else {
        setActive('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link smooth onClick={(e) => setActive('home')} className={active === 'home' ? 'active' : ''} to="/#top">Home</Link>
        </li>
        <li>
          <Link smooth onClick={(e) => setActive('about')} className={active === 'about' ? 'active' : ''} to="/#about">About</Link>
        </li>
        <li>
          <Link smooth onClick={(e) => setActive('projects')} className={active === 'projects' ? 'active' : ''} to="/#projects">Projects</Link>
        </li>
        <li>
          <Link smooth onClick={(e) => setActive('contact')} className={active === 'contact' ? 'active' : ''} to="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
