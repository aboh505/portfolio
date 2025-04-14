'use client';

import React from 'react';
import Link from 'next/link';
import styles from './styles/Home.module.css';
import OptimizedImage from './components/OptimizedImage';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Home() {
  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Next.js', level: 85, color: '#000000' },
    { name: 'Node.js', level: 80, color: '#339933' },
    { name: 'TypeScript', level: 75, color: '#3178C6' },
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'AWS', level: 65, color: '#FF9900' }
  ];

  const stats = [
    { number: '2+', label: 'Années d\'expérience' },
    { number: '10+', label: 'Projets réalisés' },
    { number: '3+', label: 'Clients satisfaits' },
    { number: '99%', label: 'Taux de satisfaction' }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.profileImage}>
            <OptimizedImage
              src="/profil.jpeg"
              alt="Photo de profil"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className={styles.profileInfo}>
            <h2>Aboh Wilfried</h2>
            <p>Développeur Full Stack</p>
          </div>
          {/* <h1 className={styles.title}>
            Développeur Full Stack
          </h1> */}
          <p className={styles.description}>
            Passionné par la création d'applications web modernes et performantes.
            Spécialisé en React, Next.js et Node.js.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className={styles.clouds}>
          <div className={styles.cloud1}></div>
          <div className={styles.cloud2}></div>
          <div className={styles.cloud3}></div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <h2>Compétences</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={skill.name} className={styles.skillCard}>
              <div className={styles.skillInfo}>
                <h3>{skill.name}</h3>
                <span>{skill.level}%</span>
              </div>
              <div className={styles.skillBar}>
                <div
                  className={styles.skillProgress}
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.projects}>
        <div className={styles.sectionHeader}>
          <h2>Projets récents</h2>
          <Link href="/projects" className={styles.viewAll}>
            Voir tous les projets
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className={styles.projectsGrid}>
          {/* Project Card 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <OptimizedImage
                src="/a1.jpg"
                alt="E-commerce Platform"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.projectContent}>
              <h3>E-commerce Platform</h3>
              <p>Une plateforme e-commerce moderne construite avec Next.js et Stripe</p>
              <div className={styles.projectTags}>
                <span>Next.js</span>
                <span>Stripe</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <OptimizedImage
                src="/a2.jpg"
                alt="Task Management App"
                width={400}
                height={300}
              />
            </div>
            <div className={styles.projectContent}>
              <h3>Task Management App</h3>
              <p>Application de gestion de tâches avec React et Firebase</p>
              <div className={styles.projectTags}>
                <span>React</span>
                <span>Firebase</span>
                <span>Material-UI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <h2>Prêt à démarrer votre projet ?</h2>
        <p>Discutons de vos besoins et voyons comment je peux vous aider.</p>
        <Link href="/contact" className={styles.ctaButton}>
          Me contacter
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}