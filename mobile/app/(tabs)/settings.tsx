import { styles } from '@/assets/styles/settings.styles';
import Car from '@/components/Car';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function Settings() {


    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
        >
            <Car />
            <Car />

        </ScrollView>
    );
}