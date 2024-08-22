import { api } from "../api/index.js";
import { getAuthorization } from "../auth/index.js";

export async function getEvents() {
    const token = await getAuthorization();

    const events = await api.get('/api/events', {
        'Authorization': `Bearer ${token}`,
    });

    return events;
}
