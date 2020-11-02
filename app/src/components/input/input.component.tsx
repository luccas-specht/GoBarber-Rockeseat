import React, { useEffect, useRef, useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import { 
    Container, 
    TextInput, 
    Icon
 } from './input.style';
interface PropsInput extends TextInputProps{
    name: string;
    icon: string;
}
interface InputValueRef extends TextInputProps{
 value: string;
}
const Input = ({ name, icon, ...rest }: PropsInput)=>  {
  const inputElementRef = useRef<any>(null)

  const {registerField, defaultValue='', fieldName, error} = useField(name)
  const inputValueRef = useRef<InputValueRef>({value: defaultValue})

  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string){
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({text: value});
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      }
    });
  },[fieldName, registerField])

  return (
      <Container isFocus={isFocus}>
          <Icon 
            name={icon} 
            size={20} 
            isFocus={isFocus}
            isFilled={isFilled}
          />
          <TextInput
            placeholderTextColor='#666360'
            ref={inputElementRef}
            defaultValue={defaultValue}
            onChangeText={(value) => {
              inputValueRef.current.value = value
            } }
            onFocus={() => { handleInputFocus() }}
            onBlur={() => { handleInputBlur() }}
          {...rest}
          />
      </Container>
  );
};

export { Input }