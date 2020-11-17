import React, { useContext } from "react";

import { useHistory, Link } from 'react-router-dom';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useFormik } from "formik";
import * as Yup from 'yup'

import { useAuth } from '../../../../../hooks'

import { AuthContext } from '../../../../../context';

import { InputText, InputPassword, Button } from '../../../../components';
import { Form, Title, CreateAccount } from './form-login.component.style';

import { validationMessage } from '../../../../../constants'

import { toastConfig } from '../../../../../configs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface LoginFormData {
  email: string;
  password: string;
}

const FormLogin = () => {
  const history = useHistory();
  const { authentication } = useAuth();
  const { authenticatedUser } = useContext(AuthContext);

  const initialValues = {
    email: '',
    password: ''
  } as LoginFormData
  
  const validations = Yup.object().shape({
    email: Yup.string()
      .required(validationMessage.loginRequiredEmail)
      .email(validationMessage.validEmail),
    password: Yup.string()
      .required(validationMessage.loginRequiredPassword)
      .min(6, validationMessage.min6Char)
  });

  const onLogin = async ({ email, password }: LoginFormData): Promise<void> => {
    const response = await authentication(email, password);
    if(response.status === 401){
      toast.error(`${response.data.message}`, toastConfig);
      formik.resetForm();
    }else{
      authenticatedUser(response);
      history.push('/sucesso');
    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: (values: LoginFormData) => {
      onLogin(values)
    }
  });
 
  return (
    <>
      <ToastContainer />
      <Form onSubmit={formik.handleSubmit}>
       <Title>Faça seu Login</Title>
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
        <Link to='forgot'>Esqueci a minha senha</Link>
      </Form>

      <CreateAccount to='sing-up'>
          <FiLogIn />
          Criar conta
        </CreateAccount>
    </>
  );
};

export {FormLogin};