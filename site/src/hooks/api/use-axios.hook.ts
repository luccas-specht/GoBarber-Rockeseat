import axios, { AxiosInstance } from 'axios';

const useAxios = (headers?: object): AxiosInstance => (
     axios.create({ baseURL: 'http://localhost:3333', headers })
);

export { useAxios }