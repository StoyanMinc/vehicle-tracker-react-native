import Car from '@/components/Car';
import Route from '@/components/Route';
import { styles } from '@assets/styles/cars-page.styles';
import { View, Text, ScrollView, Image } from 'react-native';

export default function cars() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Car />
      <Car />
      <Car />
      <Car />
      <Route />
      <Route />
      <Route />
      <Route />
    </ScrollView>
  );
}