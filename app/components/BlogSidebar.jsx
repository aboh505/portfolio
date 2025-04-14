'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/BlogSidebar.module.css';
import { Tag, Clock, TrendingUp, Hash } from 'lucide-react';

export default function BlogSidebar() {
  const categories = [
    { name: 'Frontend', count: 12 },
    { name: 'Backend', count: 8 },
    { name: 'DevOps', count: 5 },
    { name: 'Architecture', count: 7 },
    { name: 'Bonnes pratiques', count: 9 }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'Comment optimiser les performances de votre application React',
      date: '2025-04-01',
      readTime: '8 min'
    },
    {
      id: 2,
      title: 'Introduction à Next.js 14 et ses nouvelles fonctionnalités',
      date: '2025-03-25',
      readTime: '6 min'
    },
    {
      id: 3,
      title: 'Les meilleures pratiques pour la sécurité des API REST',
      date: '2025-03-15',
      readTime: '10 min'
    }
  ];

  const popularTags = [
    'React', 'Next.js', 'JavaScript', 'TypeScript', 'Node.js',
    'API', 'Performance', 'Sécurité', 'DevOps', 'Frontend'
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Catégories */}
      <section className={styles.section}>
        <h2>
          <Tag className={styles.icon} />
          Catégories
        </h2>
        <ul className={styles.categories}>
          {categories.map((category) => (
            <li key={category.name}>
              <Link href={`/blog/category/${category.name.toLowerCase()}`}>
                {category.name}
                <span className={styles.count}>{category.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Articles récents */}
      <section className={styles.section}>
        <h2>
          <Clock className={styles.icon} />
          Articles récents
        </h2>
        <ul className={styles.recentPosts}>
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h3>{post.title}</h3>
                <div className={styles.postMeta}>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long'
                    })}
                  </time>
                  <span>{post.readTime} de lecture</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Articles populaires */}
      <section className={styles.section}>
        <h2>
          <TrendingUp className={styles.icon} />
          Les plus lus
        </h2>
        <ul className={styles.popularPosts}>
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Tags populaires */}
      <section className={styles.section}>
        <h2>
          <Hash className={styles.icon} />
          Tags populaires
        </h2>
        <div className={styles.tags}>
          {popularTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className={styles.tag}
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
