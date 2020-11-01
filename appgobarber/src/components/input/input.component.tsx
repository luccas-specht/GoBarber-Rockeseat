import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './input.style';

interface PropsInput extends TextInputProps{
    name: string;
    icon: string;
}

const Input = ({ name, icon, ...rest }: PropsInput)=> (
    <Container>
        <Icon name={icon} size={20} color='#666360'/>

        <TextInput
        placeholderTextColor='#666360'
       {...rest}
        />
    </Container>
);

export { Input }