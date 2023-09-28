import React from 'react';
import styles from './layout.scss';

interface ILayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={`container ${styles.layout__container}`}>
      <div className={styles.layout__wrap}>
        {children}
      </div>
    </div>
  );
}
