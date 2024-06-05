import axios from 'axios';

// Default config options
export const defaultOptions = {
    withCredentials: false,
    headers: {
        Accept: '*/*',
        "Content-Type": 'application/json',
        // Authorization: `Bearer ${getToken()}`,
    },
};


const server = axios.create(defaultOptions);

export { server };

