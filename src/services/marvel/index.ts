import api from "..";
import { MarvelResponse, Comic, ComicSummary, Image } from "../../common/types/marvel";
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
            .get('/comics', { params: { offset, format: 'comic', orderBy: 'title', noVariants: true } });
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
            .get('/characters', { params: { offset, limit: 100 } });
        const { data: { data } } = response;
        const offsetData = data.offset;
        const results = data.results;

        return [results, offsetData];

    } catch (error) {
        Promise.reject(error);
        return error;
    }
};

export const searchCharacters = async (name: string): Promise<any> => {
    try {
        const nameSplited = name.split(' ');
        const isFullName = nameSplited.length > 1;
        const param = isFullName ? 'name' : 'nameStartsWith';
        const nameSearch = isFullName ? nameSplited.join('-') : nameSplited[0];
        const response: AxiosResponse<MarvelResponse> = await api
            .get(`/characters`, { params: { limit: 100, [param]: nameSearch } });
        const data = response.data.data;
        const offsetData = data.offset;
        const results = data.results;

        return [results, offsetData];
    } catch (error) {
        Promise.reject(error);
        return error;
    }
};

export const getComicsByCharacter = async (id: number): Promise<any> => {
    try {
        if (id) {
            const response: AxiosResponse<MarvelResponse> = await api.get(`characters/${id}/comics`);
            const data = response.data.data;
            const offsetData = data.offset;
            const results = data.results;

            return [results, offsetData];
        }
    } catch (error) {
        Promise.reject(error);
        return error;
    }
};

export const getVariants = async (variants: ComicSummary[]): Promise<Image[]> => {
    try {
        const geters = variants.map(variant => api.get(variant.resourceURI));
        const response: AxiosResponse<MarvelResponse>[] = await Promise.all(geters);
        const data = response.map(variantResponse => variantResponse.data.data.results[0].thumbnail);

        return data;
    } catch (error) {
        Promise.reject(error);
        return error;
    }
};