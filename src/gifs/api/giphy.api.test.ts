import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api";

describe('giphyApi', () => {

    test('should be configured correctly', () => {

        const defaults = giphyApi.defaults;
        const params = defaults.params;

        expect(defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        // Version evaluando uno a uno los parametros
        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);

        // Versión evaluando los parametros del objeto
        expect(params).toStrictEqual({
            lang: 'es',
            api_key: import.meta.env.VITE_GIPHY_API_KEY
        });
    });

});