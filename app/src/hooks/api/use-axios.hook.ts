import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Simulador IOS:           http://localhost:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** dispositivo via USB:     http://192.168.100.94:3333/
*/

const useAxios = (headers?: any) => {
    return axios.create({ baseURL: 'http://10.0.2.2:3333/', headers })
}

export { useAxios }