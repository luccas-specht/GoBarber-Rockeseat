import { ValidationError } from 'yup';

interface Erros {
    [key: string]: string;
}

const getValidationsErros = (err: ValidationError): Erros => {
    const validationsErros: Erros = {};

    err.inner.forEach(err=> {
     validationsErros[err.path] = err.message;   
    })

    return validationsErros;
}

export { getValidationsErros }