import { View, Text, TouchableOpacity, Image } from 'react-native';
import PlayIcon from '@assets/ic/right-arrow-ic.png';
import { style } from '@assets/styles/car.styles';


export default function PlayBtn() {
    return (
        <View style={style.playButtonContainer}>
            <TouchableOpacity>
                <Image
                    source={PlayIcon}
                />
            </TouchableOpacity>
        </View>
    );
}