import React from "react";

import { useHistory} from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { useFormik } from "formik";
import * as Yup from 'yup'

import { useRegister } from '../../../../../hooks'

import { InputText, InputPassword, Button } from '../../../../components';
import { Form, Title, BackToSingIn } from './form-sing-up.component.style';

import { validationMessage } from '../../../../../constants'

import { toastConfig } from '../../../../../configs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      .required(validationMessage.required),
    email: Yup.string()
      .required(validationMessage.loginRequiredEmail)
      .email(validationMessage.validEmail),
    password: Yup.string()
      .required(validationMessage.loginRequiredPassword)
      .min(6, validationMessage.min6Char)
  });

  const onRegister = async ({ name, email, password }: RegisterFormData): Promise<void> => {
   const response = await register(name, email, password);
    if(response?.status === 400){
      toast.error(`${response.data.message}`, toastConfig);
      formik.resetForm();
    }else{
      history.push('/login');
    }
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
     <ToastContainer />
      <Form onSubmit={formik.handleSubmit}>
       <Title>Faça seu Login</Title>
       <InputText
            icon={<FiUser size={20} />}
            id="name"
            name="name"
            placeholder='Nome'
            dataSelector='name_name'
            value={formik.values.name}
            error={formik.errors.name}
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
             dataSelector='password_password'
             error={formik.errors.password}
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