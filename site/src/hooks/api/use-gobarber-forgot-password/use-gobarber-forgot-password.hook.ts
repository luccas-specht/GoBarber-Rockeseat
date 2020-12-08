import { useAxios } from '../use-axios/use-axios.hook';

const axios = useAxios();

const useGoBarberForgotPassword = () => {

    const forgotPassword = async (email: string) => {
        try {
            const response = await axios.post('/password/forgot', {
                email: email
            })
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    const resetPassword = async (password: string, token: string) => {
        try {
            const response = await axios.post('/password/reset', {
                password: password,
                token: token
            })
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    return { forgotPassword, resetPassword }
}

export { useGoBarberForgotPassword }