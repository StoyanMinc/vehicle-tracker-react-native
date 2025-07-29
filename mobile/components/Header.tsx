import { styles } from '@assets/styles/header.styles';
import { View, Image, TouchableOpacity, Text, Pressable, StyleSheet } from 'react-native';
import SearchIcon from '@assets/ic/search-ic.png'
import BellIcon from '@assets/ic/notifications-ic.png'
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);

    const { logout } = useAuth();
    const logoutHandler = async () => {
        console.log('logout');
        await logout();
    }
    return (

        <View style={styles.headerWrapper}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image source={SearchIcon} style={styles.searchIcon} />
                </View>
                <View style={styles.rightContainer}>
                    <Image source={BellIcon} style={styles.bellIcon} />
                    <TouchableOpacity onPress={toggleMenu} style={styles.menuContainer}>
                        <View style={styles.menuLine}></View>
                        <View style={styles.menuLine}></View>
                    </TouchableOpacity>
                </View>
            </View>

            {showMenu && (
                <Pressable
                    style={styles.menuOverlay}
                    onPress={() => setShowMenu(false)}
                >
                    <Pressable
                        style={styles.hamMenuContainer}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <TouchableOpacity
                            onPress={logoutHandler}
                        >
                            <Text style={styles.hamMenuText}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.hamMenuText}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.hamMenuText}>Settings</Text>
                        </TouchableOpacity>
                    </Pressable>
                </Pressable>
            )}
        </View>

    );
}