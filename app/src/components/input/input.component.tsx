import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import { 
    Container, 
    TextInput, 
    Icon
 } from './input.style';
import { Value } from 'react-native-reanimated';
interface PropsInput extends TextInputProps{
    name: string;
    icon: string;
    onFocus: any;
}
interface InputValueRef extends TextInputProps{
 value: string;
}
const Input = ({ name, icon, onFocus, ...rest }: PropsInput)=>  {
  const inputElementRef = useRef<any>(null)

  const {registerField, defaultValue='', fieldName, error} = useField(name)
  
  const inputValueRef = useRef<InputValueRef>({value: defaultValue})

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
      <Container>
          <Icon 
            name={icon} 
            size={20} 
          />

          <TextInput
            placeholderTextColor='#666360'
            ref={inputElementRef}
            defaultValue={defaultValue}
            onChangeText={(value) => {
              inputValueRef.current.value = value
            } }
            onFocus={(e) => onFocus(true)}
            onBlur={(e) => onFocus(false)}
          {...rest}
          />
      </Container>
  );
};

export { Input }