import axios from "axios";

const baseApi = axios.create({
    baseURL: 'https://eve-api-y5ml.onrender.com/api',
    timeout: 15000,
    headers: {
        'X-Api-Key': 'ESTARTANDO_DEVS_2024_FRONT_END',
    }
});

export { baseApi };
