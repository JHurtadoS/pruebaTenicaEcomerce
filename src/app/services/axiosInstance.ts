import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api', // Cambia según tu base URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Manejo de errores global
        return Promise.reject(error);
    }
);

export default axiosInstance;
