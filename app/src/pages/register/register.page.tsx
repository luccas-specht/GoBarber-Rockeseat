import React, { useCallback, useRef } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';

import * as Yup from 'yup'
import { getValidationsErros } from '../../utils/getValidationErrors'

import { useRegister } from '../../hooks';

import { Button, Input } from '../../components';

import {  Container, 
          Title, 
          BackToLoginButton,
          BackToLoginButtonText 
        } from './register.style';

import logoGoBarber from '../../assets/img/logo.png';
interface RegisterFormData {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const formRef = useRef<FormHandles>(null)
    const { register } = useRegister();
    const navigation = useNavigation();
    
    const onSubmit = useCallback(async(data: RegisterFormData): Promise<void> => {
        try{
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().required().email(),
                password: Yup.string().min(6)
            });
            
            await schema.validate(data, {
                abortEarly: false
            })

           onRegister(data);
        } catch(err){
          if(err instanceof Yup.ValidationError){
            const erros = getValidationsErros(err);
            
            formRef.current?.setErrors(erros);

            return;
          }
        }
    },[navigation])

    const onRegister = async (data: RegisterFormData) => {
        const response = await register(data.name, data.email, data.password);
        console.log('response', response)
        if (response.status === 400) {
          console.log('não deu')
        } else {
        navigation.navigate('Login')
        }
      }

    return (
        <>
        <ScrollView 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{ flex: 1 }}
        >
             <Container>
                <Image source={logoGoBarber} />
                <Title>
                     Crie sua conta
                </Title>

                <Form 
                 ref={formRef}
                 onSubmit={onSubmit}
                >    
                    <Input
                     autoCapitalize='words'
                     icon='user'
                     name='name'
                     placeholder='Nome'
                     />

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
                     returnKeyType='send'
                     textContentType='newPassword'
                     secureTextEntry
                     onSubmitEditing={()=>{formRef.current?.submitForm()}}
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