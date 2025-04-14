'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Section principale */}
        <div className={styles.mainSection}>
          <div className={styles.brand}>
            <h2>Aboh Wilfried</h2>
            <p>Développeur Full Stack passionné par la création d'applications web modernes et performantes.</p>
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <h3>Navigation</h3>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.services}>
            <h3>Services</h3>
            <ul>
              <li>Développement Web</li>
              <li>Applications React</li>
              <li>Backend Node.js</li>
              <li>Architecture Cloud</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h3>Contact</h3>
            <p>
              <Mail size={16} />
              <a href="mailto:contact@abohwilfried.dev">contact@abohwilfried.dev</a>
            </p>
            <div className={styles.social}>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className={styles.copyright}>
          <p>
            {currentYear} Aboh Wilfried. Fait avec <Heart size={16} className={styles.heart} /> au Cameroun
          </p>
        </div>
      </div>
    </footer>
  );
}
