import React, { useState, useCallback } from 'react';

import { Fade, InputErrorMessage } from '../index';

import { Container, Input } from './input-password.style';
interface InputProps {
  id: string;
  icon?: any;
  name: string;
  value: string;
  error: any;
  dataSelector: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword = ({
  id,
  icon,
  name,
  value,
  error,
  dataSelector,
  placeholder,
  onChange,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const showError = error && error?.length > 0;

  const renderError = () => {
    if (!showError) {
      return;
    }
    console.log('show', showError)
    return (
      <Fade duration={300} when={showError}>
        <InputErrorMessage dataSelector={`${dataSelector}_error`} message={error} />
      </Fade>
    );
  };

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <>
      <Container isFilled={isFilled} isFocus={isFocus} isError={showError}>
        {icon}
        <Input
          id={id}
          type='password'
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={() => setIsFocus(true)}
          onBlur={handleInputBlur}
        />
      </Container>
      {renderError()}
    </>
  );
};

export { InputPassword };