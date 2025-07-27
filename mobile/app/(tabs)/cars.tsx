import Car from '@/components/Car';
import { styles } from '@assets/styles/cars-page.styles';
import { View, Text, ScrollView, Image } from 'react-native';

export default function cars() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Car />
        </ScrollView>
    );
}