import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './input.style';

interface PropsInput extends TextInputProps{
    name: string;
    icon: string;
    onFocus: any;
}

const Input = ({ name, icon, onFocus, ...rest }: PropsInput)=> (
    <Container>
        <Icon 
          name={icon} 
          size={20} 
        />

        <TextInput
          placeholderTextColor='#666360'
          onFocus={(e) => onFocus(true)}
          onBlur={(e) => onFocus(false)}
        {...rest}
        />
    </Container>
);

export { Input }