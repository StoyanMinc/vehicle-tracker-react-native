import * as Device from 'expo-device';
import * as SecureStore from 'expo-secure-store';
import api from '@/lib/axios';
import { useUserContext } from '@/contexts/UserContext';

export const useAuth = () => {
    const { setUser } = useUserContext();

    const login = async (username: string, password: string) => {
        const deviceInfo = {
            device_uuid: Device.osInternalBuildId ?? 'unknown',
            model: Device.modelName ?? 'unknown',
            os: Device.osName ?? 'unknown',
            os_version: Device.osVersion ?? 'unknown',
        };

        try {
            const response = await api.post('/login', {
                username,
                password,
                ...deviceInfo,
            });
            console.log(response.data);
            await SecureStore.setItemAsync('user', JSON.stringify(response.data));
            setUser(response.data)
        } catch (err: any) {
            const message = err.response?.data?.message || 'Login failed';
            throw new Error(message);
        }
    };

    const logout = async () => {
        try {
            const response = await api.get('logout');
            console.log(response);
            return response
        } catch (err: any) {
            const message = err.response?.data?.message || 'Logout failed';
            throw new Error(message);
        } finally {
            await SecureStore.deleteItemAsync('user');
            setUser(null);
        }
    }

    return { login, logout };
};

