import api from "..";
import { MarvelResponse, Comic } from "../../common/types/marvel";
import { AxiosResponse } from "axios";

export const getComics = async (): Promise<Comic[]> => {
    try {
        const response: AxiosResponse<MarvelResponse> = await api.get('/comics');
        const data = response.data.data;
        const results = data?.results;

        return results || [];

    } catch (error) {
        Promise.reject(error);
        return error;
    }
};