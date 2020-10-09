import axios from 'axios';

export function useAxios(baseURL: string, headers?: any) {
    return axios.create({baseURL, headers})
}