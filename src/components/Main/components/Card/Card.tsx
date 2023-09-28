import React from 'react';
import styles from './card.scss';
import card_plug from '../../../../../assets/images/card_plug.png';

interface ICardProps {
  username: string
  phone: string
  email: string
}

export function Card({ username, phone, email }: ICardProps) {
  return (
    <article className={styles.card}>
      <img src={card_plug} alt="card_plug" />
      <div className={styles.card__content}>
        <div className={styles.card__contacts}>
          <h2 className={styles.card__title}>{username}</h2>
          <div className={styles.card__contact_wrap}>
            <span className={styles.card__contact_text}>email:</span>
            <a className={styles.card__contact_link} href={`"mailto:${email}"`}>{email}</a>
          </div>
          <div className={styles.card__contact_wrap}>
            <span className={styles.card__contact_text}>phone:</span>
            <a className={styles.card__contact_link} href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
        <div className={styles.card__about}>
          <h3 className={styles.card__about_title}>О себе:</h3>
          <p className={styles.card__about_descr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

    </article >
  );
}
