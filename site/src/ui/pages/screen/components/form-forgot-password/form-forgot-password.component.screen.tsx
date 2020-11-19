import React from "react";

import { FiMail, FiArrowLeft } from 'react-icons/fi';

import { useFormik } from "formik";
import * as Yup from 'yup'

import { InputText, Button } from '../../../../components';
import { Form, Title, BackToSingIn } from './form-forgot-password.component.style';

import { validationMessage } from '../../../../../constants'

interface FormForgotPasswordData {
  email: string;
}

const FormForgotPassword = () => {

  const initialValues = {
    email: ''
  } as FormForgotPasswordData
  
  const validations = Yup.object().shape({
    email: Yup.string()
      .required(validationMessage.requiredEmail)
      .email(validationMessage.validEmail)
  });

  const recoverPassword = async ({ email }: FormForgotPasswordData): Promise<void> => {
   
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validations,
    onSubmit: (data: FormForgotPasswordData) => {
      recoverPassword(data)
    }
  });
 
  return (
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

        <Button type='submit' title='Recuperar' />

        <BackToSingIn to='login'>
          <FiArrowLeft />
          Voltar para o login
        </BackToSingIn>
      </Form>
  );
};

export {FormForgotPassword};