import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          ForgotPassword, 
          ForgotPasswordText,
          CreateAccountButton,
          CreateAccountButtonText 
        } from './login.style';

import logoGoBarber from '../../assets/img/logo.png';

const Login = () => {
    const navigation = useNavigation();
    const [isFocus, setIsFocus] = useState<boolean>();

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
            
                <Input
                 icon='mail'
                 name='email'
                 placeholder='E-mail'
                 onFocus={(focus: boolean) => setIsFocus(focus)}
                 />
               
                <Input
                 icon='lock'
                 name='password'
                 placeholder='Senha'
                 onFocus={(focus: boolean) => setIsFocus(focus)}
                 />

                <Button
                 onPress={()=>{console.log('oiii')}}
                 >
                    Entrar
                 </Button>
        
                <ForgotPassword onPress={()=>{}}> 
                    <ForgotPasswordText>
                        Esqueci minha senha
                    </ForgotPasswordText>
                </ForgotPassword>
            </Container>
        </ScrollView>

            <CreateAccountButton onPress={()=> navigation.navigate('Register')}>
            <Icon name='log-in' size={20} color='#ff9000'/>  
              <CreateAccountButtonText>
                    Criar uma conta
              </CreateAccountButtonText>
          </CreateAccountButton>
        </>
    );
}

export { Login }