import React from 'react';
import { Container, Input } from './input-password.style';

interface InputProps {
  id: string;
  icon?: any;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: React.FC<InputProps> = ({
  id,
  icon,
  name,
  value,
  placeholder,
  onChange,
}) => (
  <Container>
    {icon && icon}
    <Input
      id={id}
      type='password'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </Container>
);

export { InputPassword };
