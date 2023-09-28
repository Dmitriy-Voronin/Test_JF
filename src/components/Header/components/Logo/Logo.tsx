import React from 'react';
import styles from './logo.scss'
import logo from '../../../../../assets/images/logo.svg'

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
}
