import React, { useCallback, useRef } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import * as Yup from 'yup'
import { getValidationsErros } from '../../utils/getValidationErrors'

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          ForgotPassword, 
          ForgotPasswordText,
          CreateAccountButton,
          CreateAccountButtonText 
        } from './login.style';

import logoGoBarber from '../../assets/img/logo.png';
interface LoginFormData {
    email: string;
    password: string;
}

const Login = () => {
    const formRef = useRef<FormHandles>(null)
    const navigation = useNavigation();
   
    const onSubmit = useCallback(async(data: LoginFormData): Promise<void> => {
        try{
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                email: Yup.string().required().email(),
                password: Yup.string().min(6)
            });
            
            await schema.validate(data, {
                abortEarly: false
            })

        } catch(err){
          if(err instanceof Yup.ValidationError){
            const erros = getValidationsErros(err);
            
            formRef.current?.setErrors(erros);

            return;
          }
        }
    },[navigation])

    return (
        <>
        <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
             <Container >
                <Image source={logoGoBarber} />
                <Title>
                     Crie sua conta
                </Title>
            
                <Form 
                 ref={formRef}
                 onSubmit={onSubmit}
                >    
                   <Input
                    icon='mail'
                    name='email'
                    placeholder='E-mail'
                    autoCorrect={false}
                    autoCompleteType='off'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    />
                   
                   <Input
                    icon='lock'
                    name='password'
                    placeholder='Senha'
                    secureTextEntry
                    returnKeyType='send'
                    onSubmitEditing={()=>{formRef.current?.submitForm()}}
                    />
                </Form>
                <Button
                 onPress={()=>{formRef.current?.submitForm()}}
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