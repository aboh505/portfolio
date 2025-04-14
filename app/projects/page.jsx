import React from 'react';
import styles from '../styles/Projects.module.css';
import { Github, Globe, ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-commerce Modern',
      image: '/a4.jpg',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      stack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      contribution: [
        'Architecture complète du projet',
        'Intégration du système de paiement',
        'Optimisation des performances'
      ],
      github: 'https://github.com/aboh505/dashboarddummy.git',
      demo: 'https://dashboarddummy-eight.vercel.app/'
    },
    {
      title: 'Application de Gestion de Tâches',
      image: '/a6.jpg',
      description: 'Application de gestion de tâches collaborative avec temps réel.',
      stack: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      contribution: [
        'Développement frontend',
        'Implémentation du temps réel',
        'Tests unitaires'
      ],
      github: 'https://github.com/aboh505/easybank.git',
      demo: 'https://easybank-beryl-six.vercel.app/'
    },
    {
      title: 'Bible en Ligne',
      image: '/a5.jpg',
      description: 'Votre compagnon d étude biblique numérique  avec lecture dynamique.',
      stack: ['React', 'Express', 'PostgreSQL', 'AWS S3'],
      contribution: [
        'Design responsive',
        'Optimisation des images',
        'Système de galerie'
      ],
      github: 'https://github.com/aboh505/bibliaOnline.git',
      demo: 'https://biblia-online-zeta.vercel.app/'
    }
  ];

  return (
    <main className={styles.main}>
      <h1>Mes Projets</h1>
      <p className={styles.intro}>
        Découvrez une sélection de mes projets les plus récents et significatifs.
        Chaque projet représente un défi unique et des solutions innovantes.
      </p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <article key={index} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>

            <div className={styles.projectContent}>
              <h2>{project.title}</h2>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.stackContainer}>
                <h3>Technologies utilisées</h3>
                <div className={styles.stack}>
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.contributionContainer}>
                <h3>Ma contribution</h3>
                <ul className={styles.contributionList}>
                  {project.contribution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <Github size={20} />
                  Code source
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <Globe size={20} />
                  Démo live
                </a>
                <a href={`/projects/${index}`} className={styles.detailsLink}>
                  Plus de détails
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
