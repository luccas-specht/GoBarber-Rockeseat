import React from 'react';

interface InputProps {
  label: string;
  name: string;
  value: string | string[];
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  type,
  placeholder,
}) => (
  <>
    <label htmlFor={name}> {label} </label>
    <input type={type} name={name} value={value} placeholder={placeholder} />
  </>
);
