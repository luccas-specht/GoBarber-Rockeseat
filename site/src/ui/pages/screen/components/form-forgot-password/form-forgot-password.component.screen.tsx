import React, { useState } from "react";

import { FiMail, FiArrowLeft } from 'react-icons/fi';

import { useGoBarberForgotPassword } from '../../../../../hooks'

import { useFormik } from "formik";
import * as Yup from 'yup'

import { InputText, Button } from '../../../../components';
import { Form, Title, BackToSingIn } from './form-forgot-password.component.style';

import { validationMessage } from '../../../../../constants';

import { toastConfig } from '../../../../../configs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormForgotPasswordData {
  email: string;
}

const FormForgotPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { forgotPassword } = useGoBarberForgotPassword();

  const initialValues = {
    email: ''
  } as FormForgotPasswordData
  
  const validations = Yup.object().shape({
    email: Yup.string()
      .required(validationMessage.requiredEmail)
      .email(validationMessage.validEmail)
  });

  const recoverPassword = async ({ email }: FormForgotPasswordData): Promise<void> => {
    setIsLoading(true);
    const message = 'Enviamos um e-mail de recuperação de senha para o endreço fornecido, cheque sua caixa de entrada.'
    await forgotPassword(email);
    toast.success(`${message}`, toastConfig);
    formik.resetForm();
    setIsLoading(false)
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: (data: FormForgotPasswordData) => {
      recoverPassword(data)
    }
  });
 
  return (
    <>
      <ToastContainer />
       <Form onSubmit={formik.handleSubmit}>
         <Title>Recuperar senha</Title>
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

         <Button type='submit' title={isLoading ? 'Carregando...' : 'Recuperar'} />

         <BackToSingIn to='login'>
           <FiArrowLeft />
           Voltar para o login
         </BackToSingIn>
       </Form>
      </>
  );
};

export { FormForgotPassword };