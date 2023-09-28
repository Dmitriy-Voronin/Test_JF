import React from 'react';
import styles from './spinner.scss';

interface ISpinnerProps {
  className?: string
}

export function Spinner({ className }: ISpinnerProps) {
  return (
    <span className={[styles.spinner, className].join(' ')}></span>
  );
}
