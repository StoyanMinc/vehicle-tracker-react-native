import { View, Text, Image, TouchableOpacity } from 'react-native';
import CarIcon from '@assets/ill/car-ill.png';
import WheelIcon from '@assets/img/test-img.png';
import PlayIcon from '@assets/ic/right-arrow-ic.png';
import { style } from '@assets/styles/car.styles';

export default function Car() {
    return (
        <View style={style.container}>
            <View style={style.kmContainer}>
                <Image
                    style={style.carIcon}
                    source={CarIcon}
                    resizeMode="contain"
                />
                <Text style={style.speedText}>0 km/h</Text>
            </View>
            <View style={style.infoContainer}>
                <Text style={style.carNameText}>Име на автомобил име на автомобил</Text>
                <View style={style.statsContainer}>
                    <Text style={style.number}>РВ2219НА</Text>
                    <TouchableOpacity style={style.wheelIconContainer}>
                        <Image
                            style={style.wheelIcon}
                            source={WheelIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <View style={style.yellowCard}></View>
                </View>
            </View>
            <View>
                <View style={style.playButtonContainer}>
                    <TouchableOpacity>
                        <Image
                        source={PlayIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}