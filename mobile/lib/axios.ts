import axios from 'axios';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
    baseURL: Constants.expoConfig?.extra?.apiUrl,
});

api.interceptors.request.use(async (config) => {
    const user = await SecureStore.getItemAsync('user');
    if (user) {
        const parsed = JSON.parse(user);
        config.headers.token = parsed.token;
    }
    return config;
});

export default api;
