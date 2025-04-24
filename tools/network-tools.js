import * as https from 'node:https';
import axios from 'axios';

/**
 * Загружает схему FMP по API.
 * @param {string} url - URL API FMP.
 * @param {string} authToken - Токен для заголовка Authorization.
 * @returns {Promise<object>} - JSON-схема.
 * @throws {Error} - Если запрос неудачный.
 */
export async function fetchFMPSchema(url, authToken) {
    if (!authToken) {
        throw new Error('Auth token is required!');
    }

    try {
        const agent = new https.Agent({rejectUnauthorized: false});
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            httpsAgent: agent,
        });

        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch FMP schema: ${error.response?.status || error.message}`);
    }
}
