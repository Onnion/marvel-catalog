import api from "..";
import { MarvelResponse, Comic } from "../../common/types/marvel";
import { AxiosResponse } from "axios";

export const getCreators = async (id: number): Promise<any> => {
    try {
        const response: AxiosResponse<MarvelResponse> = await api.get(`/comics/${id}/creators`);
        const data = response.data.data;
        const results = data?.results;

        return results || [];
    } catch (error) {
        Promise.reject(error);
        return error;
    }
};

export const getComics = async (offset: number): Promise<[Comic[], number]> => {
    try {
        const response: AxiosResponse<MarvelResponse> = await api
            .get('/comics', { params: { offset, format: 'comic', orderBy: 'title' } });
        const data = response.data.data;
        const offsetData = data.offset;
        const results = data.results;

        return [results, offsetData];

    } catch (error) {
        Promise.reject(error);
        return error;
    }
};

export const getCharacters = async (offset: number): Promise<[any[], number]> => {
    try {
        const response: AxiosResponse<MarvelResponse> = await api
            .get('/characters', { params: { offset } });
        const { data: { data } } = response;
        const offsetData = data.offset;
        const results = data.results;

        return [results, offsetData];

    } catch (error) {
        Promise.reject(error);
        return error;
    }
};