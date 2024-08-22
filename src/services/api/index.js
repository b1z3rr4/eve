import { HttpClient } from "../../app/libs/http.js"

export const api = {
    get: async (path, headers) => {
        const httpClient =  new HttpClient();
        
        const url = 'https://eve-api-y5ml.onrender.com';

        const apiKey = 'ESTARTANDO_DEVS_2024_FRONT_END';

        httpClient.get(url + path, {
            'X-Api-Key': apiKey,
            ...headers,
        });
    },
    post: async (path, headers, data) => {
        const httpClient =  new HttpClient();
        
        const url = 'https://eve-api-y5ml.onrender.com';

        const apiKey = 'ESTARTANDO_DEVS_2024_FRONT_END';

        httpClient.post(url + path, data, {
            'X-Api-Key': apiKey,
            ...headers,
        });
    },
    put: async (path, headers, data) => {
        const httpClient =  new HttpClient();
        
        const url = 'https://eve-api-y5ml.onrender.com';

        const apiKey = 'ESTARTANDO_DEVS_2024_FRONT_END';

        httpClient.put(url + path, data, {
            'X-Api-Key': apiKey,
            ...headers,
        });
    },
    delete: async (path, headers) => {
        const httpClient =  new HttpClient();
        
        const url = 'https://eve-api-y5ml.onrender.com';

        const apiKey = 'ESTARTANDO_DEVS_2024_FRONT_END';

        httpClient.delete(url + path, {
            'X-Api-Key': apiKey,
            ...headers,
        });
    },
}
