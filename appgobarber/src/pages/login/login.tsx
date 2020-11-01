import React from 'react';

import { Image } from 'react-native';

import { Container } from './style'

import logoGoBarber from '../../assets/img/logo.png';

const Login = () => {
    return (
        <Container >
            <Image source={logoGoBarber} />
        </Container>
    );
}

export { Login }