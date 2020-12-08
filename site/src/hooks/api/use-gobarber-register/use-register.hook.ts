import { useAxios } from '../use-axios/use-axios.hook';

const axios = useAxios();

const useGoBarberRegister = () => {
   
    const register = async (name: string, email: string, password: string) => {
        try {
            const response = await axios.post('/users', {
                name: name,
                email: email,
                password: password
            })
            return response.data;
        } catch (error) {
            return error.response;
        }
    }
    return { register }
}

export { useGoBarberRegister }