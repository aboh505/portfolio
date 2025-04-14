'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Contact.module.css';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Charger les données du formulaire depuis le localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Sauvegarder les données du formulaire dans le localStorage
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    localStorage.setItem('contactFormData', JSON.stringify(newFormData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setStatus('sent');
      // Effacer le localStorage après l'envoi réussi
      localStorage.removeItem('contactFormData');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Contact</h1>
        <p>N'hésitez pas à me contacter pour discuter de vos projets</p>
      </section>

      <div className={styles.container}>
        {/* Informations de contact */}
        <section className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <Mail className={styles.icon} />
            <h3>Email</h3>
            <p>abohwilfried91@gmail.com</p>
          </div>

          <div className={styles.infoCard}>
            <Phone className={styles.icon} />
            <h3>Téléphone</h3>
            <p>+237 690 508 216</p>
          </div>

          <div className={styles.infoCard}>
            <MapPin className={styles.icon} />
            <h3>Adresse</h3>
            <p>Douala, Cameroun</p>
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows="6"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                'Envoi en cours...'
              ) : status === 'sent' ? (
                'Message envoyé !'
              ) : (
                <>
                  Envoyer le message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
