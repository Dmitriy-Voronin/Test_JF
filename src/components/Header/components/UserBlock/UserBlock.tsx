import React from 'react';
import styles from './userblock.scss';

export function UserBlock() {
  return (
    <div className={styles.user_block}>
      <span className={styles.user_block__name}>Пользователь</span>
    </div>
  );
}
