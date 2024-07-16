import React from 'react';
import '../Footer/Footer.css';
import logoImage from '/Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logoImage} alt="" />
            <p>Desarrollado por Tiffany Gamboa _ ONE|Alura 2024</p>
        </footer>

    );
}
