import { View, Text, Image } from 'react-native';
import CarIcon from '@assets/ill/car-ill.png';
import WheelIcon from '@assets/ic/map-ic.png'
import { style } from '@assets/styles/car.styles';

export default function Car() {
    return (
        <View style={style.container}>
            <View>
                <Image
                    style={style.carIcon}
                    source={CarIcon}
                    resizeMode="contain"
                />
                <Text style={style.speedText}>0 km/h</Text>
            </View>
            <View style={style.infoContainer}>
                <Text style={style.carNameText}>Име на автомобил</Text>
                <View style={style.statsContainer}>
                    <Text style={style.number}>РВ2219НА</Text>
                    <View style={style.wheelIconContainer}>
                        <Image
                            style={style.wheelIcon}
                            source={WheelIcon}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={style.yellowCard}></View>
                </View>
            </View>
            <View>
                {/* Play symbol */}
            </View>
        </View>
    );
}