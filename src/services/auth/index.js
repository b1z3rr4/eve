import { api } from "../api/index.js";

export async function getAuthorization() {
    const token = await api.post('/api/auth');
    return token;
}