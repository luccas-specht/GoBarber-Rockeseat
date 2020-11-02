import React, { useState, useCallback, useRef } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          BackToLoginButton,
          BackToLoginButtonText 
        } from './register.style';

import logoGoBarber from '../../assets/img/logo.png';

const Register = () => {
    const formRef = useRef<FormHandles>(null)
    const navigation = useNavigation();
    
    const [isFocus, setIsFocus] = useState<boolean>();

    const handleRegister = useCallback((data: object)=>{
        console.log('da', data)
    },[])
    return (
        <>
        <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
             <Container isFocus={isFocus}>
                <Image source={logoGoBarber} />
                <Title>
                     Crie sua conta
                </Title>

                <Form 
                 ref={formRef}
                 onSubmit={handleRegister}
                >    
                    <Input
                     icon='user'
                     name='username'
                     placeholder='Nome'
                     onFocus={(focus: boolean) => setIsFocus(focus)}
                     />

                    <Input
                     icon='mail'
                     name='emailRegister'
                     placeholder='E-mail'
                     onFocus={(focus: boolean) => setIsFocus(focus)}
                     />

                    <Input
                     icon='lock'
                     name='passwordRegister'
                     placeholder='Senha'
                     onFocus={(focus: boolean) => setIsFocus(focus)}
                     />
                </Form>
                 
                 <Button
                 onPress={()=>{formRef.current?.submitForm()}}
                 >
                    Entrar
                 </Button>
        
            </Container>
        </ScrollView>

            <BackToLoginButton onPress={()=> navigation.navigate('Login')}>
            <Icon name='arrow-left' size={20} color='#fff'/>  
              <BackToLoginButtonText>
                   Voltar para o login
              </BackToLoginButtonText>
          </BackToLoginButton>
        </>
    );
}

export { Register }