import { View, Text, Image, TouchableOpacity } from 'react-native';
import CarIcon from '@assets/ill/car-ill.png';
import WheelIcon from '@assets/img/test-img.png';
import { styles } from '@assets/styles/car.styles';

export default function Car() {
    return (
        <View style={styles.container}>
            <View style={styles.kmContainer}>
                <Image
                    style={styles.carIcon}
                    source={CarIcon}
                    resizeMode="contain"
                />
                <Text style={styles.speedText}>0 km/h</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.carNameText}>Име на автомобил име на автомобил</Text>
                <View style={styles.statsContainer}>
                    <Text style={styles.number}>РВ2219НА</Text>
                    <TouchableOpacity style={styles.wheelIconContainer}>
                        <Image
                            style={styles.wheelIcon}
                            source={WheelIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={styles.yellowCard}></View>
                </View>
            </View>
        </View>
    );
}