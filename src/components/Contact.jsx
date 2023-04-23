import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Contact.css'

function Contact() {
  return (
    <div id="contact">
      <h1>Contacts</h1>
      <p>
        You can contact me through the following channels:
      </p>
      <ul>
        <li>
          <Link to="https://www.linkedin.com/in/adel-al-qosi-4548b2248/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </Link>
        </li>
        <li>
          <Link to="https://github.com/Adel-Al-Qosi" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </Link>
        </li>
        <li>
          <Link to="mailto:Adel.Al.Qosi@gmail.com">
            <FaEnvelope /> Email
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
