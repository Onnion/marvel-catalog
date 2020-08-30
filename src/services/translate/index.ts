import axios, { AxiosResponse } from 'axios';
import * as qs from 'querystring';
import { RAPIAPI_URL, RAPIAPI_KEY } from '../../configs/env';
import { Interface } from 'readline';
import { Translations } from '../../common/types/translate';

export const api = axios.create({
    baseURL: RAPIAPI_URL,
    headers: {
        "x-rapidapi-host": "google-translate1.p.rapidapi.com",
        "x-rapidapi-key": RAPIAPI_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
        "useQueryString": true
    }
});

export const translate = async (q: string): Promise<any> => {
    try {
        const response: AxiosResponse<{ data: Translations }> = await api.post('/', qs.stringify({
            "source": "pt",
            "target": "en",
            q,
        }));
        const { data: { data } } = response;

        return data.translations[0].translatedText;
    } catch (error) {
        Promise.reject(error);
        return error;
    }
};