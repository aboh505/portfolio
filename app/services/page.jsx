import React from 'react';
import styles from '../styles/Services.module.css';
import { Code, Layout, Database, Smartphone, Cloud, Search } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code />,
      title: 'Développement Web Full Stack',
      description: 'Création d\'applications web complètes et performantes avec les dernières technologies.',
      features: ['Sites web dynamiques', 'Applications SPA', 'APIs RESTful']
    },
    {
      icon: <Layout />,
      title: 'Intégration Frontend',
      description: 'Développement d\'interfaces utilisateur modernes et responsives.',
      features: ['Design responsive', 'Animations fluides', 'Performance optimisée']
    },
    {
      icon: <Database />,
      title: 'Backend & Base de données',
      description: 'Conception et développement de systèmes backend robustes.',
      features: ['Architecture API', 'Gestion de données', 'Sécurité']
    },
    {
      icon: <Smartphone />,
      title: 'Applications Mobiles',
      description: 'Développement d\'applications mobiles cross-platform.',
      features: ['React Native', 'PWA', 'Applications hybrides']
    },
    {
      icon: <Cloud />,
      title: 'Déploiement & DevOps',
      description: 'Mise en production et maintenance d\'applications.',
      features: ['CI/CD', 'Cloud hosting', 'Monitoring']
    },
    {
      icon: <Search />,
      title: 'Consulting',
      description: 'Conseil technique et accompagnement de projets.',
      features: ['Audit technique', 'Architecture', 'Formation']
    }
  ];

  return (
    <main className={styles.main}>
      <h1>Mes Services</h1>
      <p className={styles.intro}>
        Je propose une gamme complète de services en développement web et mobile,
        adaptés à vos besoins spécifiques.
      </p>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              {service.icon}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className={styles.cta}>
        <h2>Intéressé par mes services ?</h2>
        <p>Discutons de votre projet et trouvons la meilleure solution ensemble.</p>
        <a href="/contact" className={styles.ctaButton}>
          Me Contacter
        </a>
      </section>
    </main>
  );
}
