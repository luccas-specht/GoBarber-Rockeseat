import React from 'react';
import { Input } from './input-text.style';

interface InputProps {
  id: string;
  icon?: any;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<InputProps> = ({
  id,
  name,
  value,
  placeholder,
  onChange,
}) => (
  <Input
    id={id}
    type='text'
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

export { InputText };
