import React from 'react';
import styles from './header.scss';
import { Logo } from './components/Logo';
import { UserBlock } from './components/UserBlock';

export function Header() {

  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__container}`}>
        <Logo />
        <UserBlock />
      </div>
    </header>
  );
}
