import React from 'react';
import { ButtonStyle } from './button.style';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <ButtonStyle> {title}</ButtonStyle>;
};

export { Button };
