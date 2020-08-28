import axios from 'axios';
import md5 from 'md5';
import { API_URL, PRIVATE_KEY, PUBLIC_KEY } from '../configs/env';

export const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(request => {
    try {
        const ts = new Date().getTime().toString();
        const private_key = PRIVATE_KEY || '';
        const public_key = PUBLIC_KEY || '';
        const hash = md5(ts + private_key + public_key);

        request.url = `${request.url}?ts=${ts}&apikey=${public_key}&hash=${hash}`;

        return request;
    } catch (error) {
        return Promise.reject(error);
    }
});

export default api;