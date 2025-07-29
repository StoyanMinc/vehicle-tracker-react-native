import { styles } from '@/assets/styles/settings.styles';
import { useUserContext } from '@/contexts/UserContext';
import { useAuth } from '@/hooks/useAuth';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Settings() {


    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
}