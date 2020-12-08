import { useAxios } from '../use-axios/use-axios.hook';

const axios = useAxios({ 
    Authorization: `Bearer ${localStorage.getItem('@GoBarber:token')}`
 });

const useGoBarberClient = () => {

    const updateAvatar = async (avatar: string): Promise<any> => {
        try {
            const response = await axios.post('/users/avatar')
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    const getUser = async (): Promise<any> => {
        try {
            const response = await axios.get('/profile')
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    return { updateAvatar, getUser }
}

export { useGoBarberClient }