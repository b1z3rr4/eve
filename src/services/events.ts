import { Event } from "../types";
import { baseApi } from "./api"
import { getToken } from "./auth";

export const getEvents = async () => {
    const token = await getToken();

    const response = await baseApi.get<Array<Event>>('/events', {
        headers: {
            Authorization: 'Bearer ' + token
        }
    });

    return response.data;
}