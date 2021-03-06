import React from "react";

import { useHistory, useLocation } from 'react-router-dom';

import { FiLock } from 'react-icons/fi';

import { useFormik } from "formik";
import * as Yup from 'yup'

import { useGoBarberForgotPassword } from '../../../../../hooks'

import { InputPassword, Button } from '../../../../components';
import { Form, Title } from './form-reset-password.component.style';

import { validationMessage } from '../../../../../constants'

import { toastConfig } from '../../../../../configs';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface ResetPasswordData {
  password: string;
  passwordConfirmation: string;
}

const  FormResetPassword  = () => {
  const history = useHistory();
  const { resetPassword } = useGoBarberForgotPassword();
  const location = useLocation();
  const messageFedback = 'Ocorreu um erro ao resetar seua senha, tente novamente.'

  const initialValues = {
    password: ''
  } as ResetPasswordData
  
  const validations =Yup.object({
    password: Yup.string().min(6, validationMessage.min6Char)
    .required(validationMessage.requiredPassword),
    passwordConfirmation: Yup.string()
       .oneOf([Yup.ref('password'), undefined], 
    validationMessage.requiredPasswordsMustMatch)
  });

  const onReset = async ({ password, passwordConfirmation }: ResetPasswordData): Promise<void> => {
    const token = location.search.replace('?token=', '');

    if(!token){
      toast.error(messageFedback, toastConfig);
      formik.resetForm();
    }

    const response = await resetPassword(password, token);
   
    history.push('/login');
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: (data: ResetPasswordData) => {
      onReset(data)
    }
  });
 
  return (
    <>
      <ToastContainer />
      <Form onSubmit={formik.handleSubmit}>
       <Title>Resetar senha</Title> 
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

          <InputPassword
             icon={<FiLock size={20} />}
             id="passwordConfirmation"
             name="passwordConfirmation"
             placeholder='Confirmação de senha'
             dataSelector='passwordConfirmation'
             error={formik.errors.passwordConfirmation}
             value={formik.values.passwordConfirmation}
             onChange={formik.handleChange}
          />

        <Button type='submit' title='Alterar Senha' />
      </Form>
    </>
  );
};

export { FormResetPassword };