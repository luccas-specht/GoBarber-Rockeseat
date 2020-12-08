import { useAxios } from '../use-axios/use-axios.hook';

const token = localStorage.getItem('@GoBarber:token');
const axios = useAxios({ Authorization: `Bearer ${token}`})

const useGoBarberAppointment = () => {
    
    const listAppointment = async () => {
        try {
            const response = await axios.get('appointments')
            return response.data;
        } catch (error) {
            return error.response;
        }
    }

    const createAppointment = async (data: Date, providerId: string) => {
        try {
            const response = await axios.post('appointments',{
                provider_id: providerId,
                date: data
            })
            return response.data;
        } catch (error) {
            return error.response;
        }
    }
     return { listAppointment, createAppointment }
}

export { useGoBarberAppointment }