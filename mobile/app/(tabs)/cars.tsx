import Car from '@/components/Car';
import PlayBtn from '@/components/PlayBtn';
import Route from '@/components/Route';
import { styles } from '@assets/styles/cars-page.styles';
import { View, Text, ScrollView, Image } from 'react-native';

export default function cars() {
    return (
        <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.container}
        >
            <View style={styles.carContainer}>
                <Car />
                <PlayBtn />
            </View>
            <View style={styles.carContainer}>
                <Car />
                <PlayBtn />
            </View>
            <View style={styles.carContainer}>
                <Car />
                <PlayBtn />
            </View>
            <View style={styles.carContainer}>
                <Car />
                <PlayBtn />
            </View>
            <View style={styles.carContainer}>
                <Route />
                <PlayBtn />
            </View>
            <View style={styles.carContainer}>
                <Route />
                <PlayBtn />
            </View>
            <View style={styles.carContainer}>
                <Route />
                <PlayBtn />
            </View>
        </ScrollView>
    );
}