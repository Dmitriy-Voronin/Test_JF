import React from 'react';
import styles from './main.scss';
import { Card } from './components/Card';
import { useAppSelector } from '../../hooks/redux';
import { Spinner } from '../Spinner';

export function Main() {
  const user = useAppSelector(state => state.user.user)
  const status = useAppSelector(state => state.user.status)
  // const status = 'loading'

  return (
    <main className={styles.main}>
      <section className={styles.user_card}>
        {status === 'loading'
          ?
          <Spinner className={styles.spinner} />
          :
          user
            ?
            <Card phone={user.phone} username={user.username} email={user.email} />
            :
            <div className={styles.user_card__default}>
              <span className={styles.user_card__default_value}>
                Выберите сотрудника, чтобы посмотреть его профиль
              </span>
            </div>
        }


      </section>
    </main>
  );
}
