import React from 'react';
import { ButtonStyle } from './button.style';
interface ButtonProps {
  title: string;
  type: 'button' | 'submit' | 'reset';
}
const Button = ({ title, type }: ButtonProps) => (<ButtonStyle type={type}> {title}</ButtonStyle>);

export { Button };
