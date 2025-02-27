import React, { JSX } from 'react';
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void
};

const Button = ({ onClick, children }: ButtonProps): JSX.Element => {

  return (
    <button
      onClick={onClick}
      className='button' 
      type='button'
    >
      {children}
    </button>
  )
}

export default Button;