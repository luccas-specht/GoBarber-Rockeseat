import React from "react";

import { useHistory} from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { useFormik } from "formik";
import * as Yup from 'yup'

import { useRegister } from '../../../../../hooks'

 import { InputText, InputPassword, Button } from '../../../../components';
 import { Form, Title, BackToSingIn } from './form-sing-up.component.style';

import { validationMsg } from '../../../../../constants'
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const FormRegister = () => {
  const history = useHistory();
  const { register } = useRegister();

  const initialValues = {
    name: '',
    email: '',
    password: ''
  } as RegisterFormData
  
  const validations = Yup.object().shape({
    name: Yup.string()
      .required(validationMsg.required),
    email: Yup.string()
      .required(validationMsg.loginRequiredEmail)
      .email(validationMsg.validEmail),
    password: Yup.string()
      .required(validationMsg.loginRequiredPassword)
      .min(6, validationMsg.min6Char)
  });

  const onRegister = async ({ name, email, password }: RegisterFormData): Promise<void> => {
    try {
       const response = await register(name, email, password);
      history.push('/login');
    } catch (err) {
      console.log('error', err)
    };
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: (values: RegisterFormData) => {
      onRegister(values)
    }
  });
 
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
       <Title>Faça seu Login</Title>
       <InputText
            icon={<FiUser size={20} />}
            id="name"
            name="name"
            placeholder='Nome'
            dataSelector='name_name'
            value={formik.values.name}
            error={formik.errors.email}
            onChange={formik.handleChange}
          />  
          <InputText
            icon={<FiMail size={20} />}
            id="email"
            name="email"
            placeholder='E-mail'
            dataSelector='login_login'
            value={formik.values.email}
            error={formik.errors.email}
            onChange={formik.handleChange}
          />    
          <InputPassword
             icon={<FiLock size={20} />}
             id="password"
             name="password"
             placeholder='Senha'
             value={formik.values.password}
             onChange={formik.handleChange}
          />
        <Button type='submit' title='Entrar' />
      </Form>

      <BackToSingIn to='login'>
        <FiArrowLeft />
        Voltar para o login
      </BackToSingIn>
    </>
  );
};

export { FormRegister };