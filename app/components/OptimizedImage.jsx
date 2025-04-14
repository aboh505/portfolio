import Image from 'next/image';
import styles from '../styles/OptimizedImage.module.css';

export default function OptimizedImage({ src, alt, priority = false }) {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className={styles.image}
      />
    </div>
  );
}
