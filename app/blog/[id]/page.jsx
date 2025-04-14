'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/BlogPost.module.css';
import OptimizedImage from '../../components/OptimizedImage';
import {
  Calendar,
  Clock,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function BlogPost({ params }) {
  const [activeSection, setActiveSection] = useState('');

  // Simuler les données d'un article
  const article = {
    id: params.id,
    title: 'Comment créer une application React performante',
    excerpt: 'Découvrez les meilleures pratiques pour optimiser vos applications React et améliorer les performances.',
    content: `
      <h2>Introduction</h2>
      <p>React est l'une des bibliothèques JavaScript les plus populaires pour créer des interfaces utilisateur interactives. Cependant, à mesure que votre application grandit, les performances peuvent devenir un défi.</p>

      <h2>1. Optimisation du rendu</h2>
      <p>L'une des principales causes de problèmes de performance dans React est le rendu inutile de composants. Voici quelques techniques pour l'éviter :</p>
      <ul>
        <li>Utilisation de React.memo() pour les composants fonctionnels</li>
        <li>Implémentation de shouldComponentUpdate pour les composants de classe</li>
        <li>Utilisation judicieuse des hooks useCallback et useMemo</li>
      </ul>

      <h2>2. Gestion de l'état</h2>
      <p>Une bonne gestion de l'état est cruciale pour les performances de votre application :</p>
      <ul>
        <li>Évitez de stocker trop de données dans l'état global</li>
        <li>Utilisez le state local quand c'est possible</li>
        <li>Structurez votre état de manière optimale</li>
      </ul>

      <h2>3. Code splitting</h2>
      <p>Le code splitting permet de réduire la taille du bundle initial :</p>
      <pre><code>
const MyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MyComponent />
    </Suspense>
  );
}
      </code></pre>
    `,
    date: '8 Avril 2025',
    readTime: '5 min',
    categories: ['React', 'Performance'],
    author: {
      name: 'Wansi Mathurin',
      role: 'Senior Frontend Developer',
      image: '/a8.jpg'
    }
  };

  // Articles connexes
  const relatedPosts = [
    {
      id: 2,
      title: 'Les nouveautés de Next.js 14',
      excerpt: 'Explorez les nouvelles fonctionnalités et améliorations...',
      image: '/a16.jpg',
      date: '7 Avril 2025',
      categories: ['Next.js']
    },
    {
      id: 3,
      title: 'Introduction au State Management avec Redux',
      excerpt: 'Apprenez à gérer l\'état de votre application...',
      image: '/a16.jpg',
      date: '6 Avril 2025',
      categories: ['Redux']
    }
  ];

  // Table des matières
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'optimisation-du-rendu', title: 'Optimisation du rendu', level: 2 },
    { id: 'gestion-de-letat', title: 'Gestion de l\'état', level: 3 },
    { id: 'code-splitting', title: 'Code splitting', level: 4 }
  ];

  // Observer les sections pour la table des matières
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('h2').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>
      {/* En-tête de l'article */}
      <header className={styles.header}>
        <div className={styles.categories}>
          {article.categories.map((category, index) => (
            <span key={index} className={styles.category}>
              {category}
            </span>
          ))}
        </div>
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.meta}>
          <span>
            <Calendar size={18} />
            {article.date}
          </span>
          <span>
            <Clock size={18} />
            {article.readTime} de lecture
          </span>
        </div>
        <div className={styles.author}>
          <div className={styles.authorImage}>
            <OptimizedImage
              src={article.author.image}
              alt={article.author.name}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.authorInfo}>
            <h3>{article.author.name}</h3>
            <p>{article.author.role}</p>
          </div>
        </div>
      </header>

      {/* Image principale */}
      <div className={styles.featuredImage}>
        <OptimizedImage
          src="/a16.jpg"
          alt={article.title}
          width={1200}
          height={600}
          priority
        />
      </div>

      <div className={styles.container}>
        {/* Table des matières */}
        <aside className={styles.tableOfContents}>
          <h3>Table des matières</h3>
          <ul className={styles.tocList}>
            {tableOfContents.map((item) => (
              <li
                key={item.id}
                className={`${styles.tocItem} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                style={{ paddingLeft: `${item.level * 0.5}rem` }}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenu de l'article */}
        <article className={styles.content}>
          <div dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Boutons de partage */}
          <div className={styles.share}>
            <button className={styles.shareButton} aria-label="Partager sur Twitter">
              <Twitter size={20} />
            </button>
            <button className={styles.shareButton} aria-label="Partager sur LinkedIn">
              <Linkedin size={20} />
            </button>
            <button className={styles.shareButton} aria-label="Partager sur Facebook">
              <Facebook size={20} />
            </button>
            <button className={styles.shareButton} aria-label="Plus d'options de partage">
              <Share2 size={20} />
            </button>
          </div>
        </article>
      </div>

      {/* Articles connexes */}
      <section className={styles.relatedPosts}>
        <h2>Articles connexes</h2>
        <div className={styles.relatedGrid}>
          {relatedPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={225}
                  />
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.categories}>
                    {post.categories.map((category, index) => (
                      <span key={index} className={styles.category}>
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className={styles.articleTitle}>{post.title}</h3>
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
