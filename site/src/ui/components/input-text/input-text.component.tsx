import React, { useState, useCallback } from 'react';

import { Fade, InputErrorMessage } from '../index';

import { Container, InputStyle } from './input-text.style';
interface InputProps {
  id: string;
  name: string;
  icon?: any;
  value: string;
  placeholder: string;
  error: any;
  dataSelector: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = ({
  id,
  name,
  icon,
  value,
  placeholder,
  error,
  dataSelector,
  onChange,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  
  const showError = error && error?.length > 0;

  const renderError = () => {
    if (!showError) {
      return;
    }
    return (
      <Fade duration={300} when={showError}>
        <InputErrorMessage dataSelector={`${dataSelector}_error`} message={error} />
      </Fade>
    );
  };

  const handleInputBlur = useCallback((): void => {
    setIsFocus(false);
    setIsFilled(!!value);
  }, [value]);

  return (
    <>
      <Container isFilled={isFilled} isFocus={isFocus} isError={showError}>
        {icon}
        <InputStyle
          id={id}
          type='text'
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

export { InputText };