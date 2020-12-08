import { useAxios } from '../use-axios/use-axios.hook';

const axios = useAxios();

const useGoBarberAuth = () => {
    
    const authentication = async (email: string, password: string) => {
        try {
            const response = await axios.post('/auth', {
                email: email,
                password: password
            })
            return response.data;
        } catch (error) {
            return error.response;
        }
    }
    return { authentication }
}

export { useGoBarberAuth }