import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import PlayIcon from '@assets/ic/right-arrow-ic.png';
import RouteImage from '@assets/ill/route-test-ill.png';
import BackgroundImage from '@assets/ill/background-ill.png'
import { style } from '@assets/styles/route.styles';


export default function Route() {
    return (
        <View style={style.container}>
            <ImageBackground
            //  style={style.routeImageContainer} 
                source={BackgroundImage}
                resizeMode="cover"
            >
                <Image source={RouteImage} style={style.routeImage} />
            </ImageBackground>
            <View style={style.infoContainer}>
                <Text style={style.routeText}>София - Пловдив</Text>
                <View style={style.statsContainer}>
                    <Text style={style.kmText}>120км</Text>
                    <Text style={style.dateText}>22.10.20 15:30 - 18:00ч</Text>
                </View>
            </View>
            <View style={style.playButtonContainer}>
                <TouchableOpacity>
                    <Image
                        source={PlayIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}