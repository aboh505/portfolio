'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';
import { Calendar, Clock, Tag, ChevronRight, Send } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Comment créer une application React performante',
      excerpt: 'Découvrez les meilleures pratiques pour optimiser vos applications React et améliorer les performances.',
      image: '/a13.png',
      date: '8 Avril 2025',
      readTime: '5 min',
      categories: ['React', 'Performance']
    },
    {
      id: 2,
      title: 'Les nouveautés de Next.js 14',
      excerpt: 'Explorez les nouvelles fonctionnalités et améliorations apportées par Next.js 14.',
      image: '/a13.png',
      date: '7 Avril 2025',
      readTime: '4 min',
      categories: ['Next.js', 'JavaScript']
    },
    {
      id: 3,
      title: 'Introduction au State Management avec Node.js',
      excerpt: 'Apprenez à gérer l\'état de votre application avec Node.js, étape par étape.',
      image: '/a13.png',
      date: '6 Avril 2025',
      readTime: '6 min',
      categories: ['Node.js', 'Next']
    }
  ];

  const popularPosts = [
    {
      id: 1,
      title: 'Les bases de TypeScript',
      image: '/a12.jpg',
      date: '5 Avril 2025'
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      image: '/a11.jpg',
      date: '4 Avril 2025'
    },
    {
      id: 3,
      title: 'Débuter avec TailwindCSS',
      image: '/a10.jpg',
      date: '3 Avril 2025'
    }
  ];

  const tags = [
    'JavaScript', 'React', 'Next.js', 'CSS', 'TypeScript',
    'Node.js', 'Performance', 'UI/UX', 'DevOps', 'Testing'
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Blog</h1>
          <p>
            Découvrez des articles techniques, des tutoriels et des bonnes pratiques
            sur le développement web moderne.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        {/* Articles */}
        <section>
          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <article key={article.id} className={styles.articleCard}>
                <Link href={`/blog/${article.id}`}>
                  <div className={styles.articleImage}>
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={225}
                    />
                  </div>
                  <div className={styles.articleContent}>
                    <div className={styles.categories}>
                      {article.categories.map((category, index) => (
                        <span key={index} className={styles.category}>
                          {category}
                        </span>
                      ))}
                    </div>
                    <h2 className={styles.articleTitle}>{article.title}</h2>
                    <div className={styles.articleMeta}>
                      <span>
                        <Calendar size={16} />
                        {article.date}
                      </span>
                      <span>
                        <Clock size={16} />
                        {article.readTime}
                      </span>
                    </div>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                    <div className={styles.readMore}>
                      Lire la suite
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={`${styles.pageButton} ${styles.active}`}>1</button>
            <button className={styles.pageButton}>2</button>
            <button className={styles.pageButton}>3</button>
          </div>
        </section>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          {/* Newsletter */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Newsletter</h3>
            <p>Recevez les derniers articles directement dans votre boîte mail.</p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Votre email"
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterButton}>
                <Send size={16} />
              </button>
            </form>
          </div>

          {/* Articles populaires */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Articles populaires</h3>
            {popularPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id}>
                <div className={styles.popularPost}>
                  <div className={styles.popularPostImage}>
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      width={80}
                      height={60}
                    />
                  </div>
                  <div className={styles.popularPostContent}>
                    <h4 className={styles.popularPostTitle}>{post.title}</h4>
                    <span className={styles.popularPostDate}>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Tags */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Tags</h3>
            <div className={styles.tagsCloud}>
              {tags.map((tag, index) => (
                <Link href={`/blog/tag/${tag.toLowerCase()}`} key={index}>
                  <span className={styles.tag}>
                    <Tag size={14} />
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
