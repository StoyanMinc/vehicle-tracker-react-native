import { styles } from '@/assets/styles/settings.styles';
import { useUserContext } from '@/contexts/UserContext';
import { useAuth } from '@/hooks/useAuth';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Settings() {

    const { logout } = useAuth();
    const logoutHandler = async () => {
        console.log('logout');
        await logout();
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoutContaier}>
                <TouchableOpacity
                    onPress={logoutHandler}
                    style={styles.logoutButton}>
                    <Text style={styles.logoutButtonText}>logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settings}>
                <Text style={styles.settingsTitle}>Settings</Text>
            </View>
        </View>
    );
}