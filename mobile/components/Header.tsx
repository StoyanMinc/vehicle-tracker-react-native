import { styles } from '@assets/styles/header.styles';
import { View, Image } from 'react-native';
import SearchIcon from '@assets/ic/search-ic.png'
import BellIcon from '@assets/ic/notifications-ic.png'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Image
                    source={SearchIcon}
                    style={styles.searchIcon}
                />
            </View>
            <View style={styles.rightContainer}>
                <Image
                    source={BellIcon}
                    style={styles.bellIcon}
                />
                <View style={styles.menuContainer}>
                    <View style={styles.menuLine}></View>
                    <View style={styles.menuLine}></View>
                </View>
            </View>
        </View>
    );
}