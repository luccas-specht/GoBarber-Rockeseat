import React, { useState, useCallback } from 'react';
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
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFilled={isFilled} isFocus={isFocus}>
      {icon}
      <Input
        id={id}
        type='text'
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleInputBlur}
        onFocus={() => setIsFocus(true)}
      />
    </Container>
  );
};

export { InputPassword };
