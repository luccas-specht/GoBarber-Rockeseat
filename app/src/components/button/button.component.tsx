import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Text } from './button.style';

interface PropsButton extends RectButtonProperties {
    children: string
}

const Button = ({ children, ...rest }: PropsButton)=>(
        <Container {...rest}>
            <Text> {children} </Text>
        </Container>
    );

export { Button }