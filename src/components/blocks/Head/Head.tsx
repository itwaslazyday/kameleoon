import React, { JSX } from 'react';
import './Head.css';

type HeadProps = {
  title: string;
  subtitle?: string;
};

const Head = ({ title, subtitle }: HeadProps): JSX.Element => {

  return (
    <section className='head container'>
      <h1 className='head__title'>{title}</h1>
      { subtitle && <p className='head__subtitle'>{subtitle}</p> }
    </section>
  )
}

export default React.memo(Head);