import React from 'react';
import styles from '../styles/About.module.css';
import { 
  Code, Database, Server, Layout, 
  BookOpen, Briefcase, GraduationCap,
  Coffee, Music, Camera, Plane, Book,
  Brain, Users, Target, Zap,
  ComponentIcon,
  Gamepad,
  DnaIcon,
  Menu,
  CircleDashedIcon,
  CreativeCommons,
  ArrowDownSquareIcon,
  InspectIcon
} from 'lucide-react';
import { Codystar } from 'next/font/google';

export default function About() {
  const skills = [
    {
      icon: <Code />,
      title: 'Frontend',
      description: 'React, Next.js, Vue.js, HTML5, CSS3, JavaScript'
    },
    {
      icon: <Server />,
      title: 'Backend',
      description: 'Node.js, Python, Java, RESTful APIs'
    },
    {
      icon: <Database />,
      title: 'Base de données',
      description: 'MongoDB, PostgreSQL, MySQL, Redis'
    },
    {
      icon: <Layout />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Design System'
    }
  ];

  const timeline = [
    {
      date: '2024 - Présent',
      title: 'Développeur Full Stack Senior',
      description: 'Lead developer sur des projets innovants utilisant les dernières technologies.'
    },
    {
      date: '2022 - 2023',
      title: 'Développeur Full Stack',
      description: 'Développement d\'applications web complexes et évolutives.'
    },
    {
      date: '2021 - 2022',
      title: 'Développeur Frontend',
      description: 'Spécialisation en interfaces utilisateur modernes et performantes.'
    },
    {
      date: '2020 - 2021',
      title: 'Formation Développement Web',
      description: 'Formation intensive en développement web full stack.'
    }
  ];

  const interests = [
    { icon: <Coffee />, label: 'Café' },
    { icon: <Music />, label: 'Musique' },
    { icon: <Camera />, label: 'Photo' },
    { icon: <Plane />, label: 'Voyage' },
    { icon: <Book />, label: 'Apprentissage' },
    { icon: <ComponentIcon />, label: 'Coding' },
    { icon: <Gamepad />, label: 'Programmation' },,
    { icon: <Book />, label: 'Lecture' },
    { icon: <Music />, label: 'Résolution' },
    { icon: <Camera />, label: 'Photo' },
    { icon: <InspectIcon />, label: 'Innovation' },
    { icon: <ArrowDownSquareIcon />, label: 'Design' },
    { icon: <Book />, label: 'Développement' },
    { icon: <Book />, label: 'Analyse' },
    { icon: <CreativeCommons />, label: 'Creation' }
  ];

  const values = [
    {
      icon: <Brain />,
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles solutions créatives.'
    },
    {
      icon: <Users />,
      title: 'Collaboration',
      description: 'Le travail d\'équipe est la clé du succès.'
    },
    {
      icon: <Target />,
      title: 'Qualité',
      description: 'Un code propre et maintenable est une priorité.'
    },
    {
      icon: <Zap />,
      title: 'Performance',
      description: 'Optimisation et efficacité dans chaque projet.'
    },
    {
      icon: <CircleDashedIcon />,
      title: 'Collaboration',
      description: 'Le travail d\'équipe est la clé du succès.'
    },
    {
      icon: <Menu />,
      title: ' Lecture Personnalisée',
      description: 'Ajustez la taille du texte pour une lecture confortable.'
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>À propos de moi</h1>
          <p>
            Passionné par le développement web et les nouvelles technologies,
            je crée des solutions innovantes et performantes pour mes clients.
            Mon objectif est de transformer des idées en expériences numériques exceptionnelles.
          </p>
        </div>
      </section>

      <div className={styles.grid}>
        {/* Compétences */}
        <section className={styles.section}>
          <h2>
            <BookOpen />
            Compétences
          </h2>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <div key={index} className={`${styles.skillItem} hover-lift`}>
                {skill.icon}
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expérience */}
        <section className={styles.section}>
          <h2>
            <Briefcase />
            Parcours
          </h2>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{item.date}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.grid}>
        {/* Valeurs */}
        <section className={styles.section}>
          <h2>
            <Target />
            Valeurs
          </h2>
          <div className={styles.skills}>
            {values.map((value, index) => (
              <div key={index} className={`${styles.skillItem} hover-lift`}>
                {value.icon}
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Centres d'intérêt */}
        <section className={styles.section}>
          <h2>
            <Coffee />
            Centres d&apos;intérêt
          </h2>
          <div className={styles.interests}>
            {interests.map((interest, index) => (
              <div key={index} className={`${styles.interestItem} hover-lift`}>
                {interest.icon}
                <span>{interest.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
