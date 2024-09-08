import { baseApi } from "./api"

export const getToken = async () => {
    const response = await baseApi.post<{ token: string }>('/auth', null);

    return response.data.token;
}