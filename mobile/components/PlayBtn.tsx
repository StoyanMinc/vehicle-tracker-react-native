import { View, TouchableOpacity, Image } from 'react-native';
import PlayIcon from '@assets/ic/right-arrow-ic.png';
import { styles } from '@assets/styles/car.styles';


export default function PlayBtn() {
    return (
        <View style={styles.playButtonContainer}>
            <TouchableOpacity>
                <Image
                    source={PlayIcon}
                />
            </TouchableOpacity>
        </View>
    );
}