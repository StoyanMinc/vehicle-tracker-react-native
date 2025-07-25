import { Redirect, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useUserContext } from '@/contexts/UserContext';
import { Image } from 'react-native';
import StatisticIcon from '@assets/ic/stat-light-ic.png';
import MapIcon from '@assets/ic/map-light-ic.png';
import CarIcon from '@assets/ic/car-light-ic.png';
import RoutesIcon from '@assets/ic/route-light-ic.png';
import SettingsIcon from '@assets/ic/technical-light-ic.png';


export default function TabLayout() {
    const { user } = useUserContext();
    console.log(user);

    if (!user) {
        return <Redirect href="/login" />;
    }
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#007AFF',
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tabs.Screen
                name="statistic"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={StatisticIcon}
                            style={{ width: size, height: size, tintColor: color }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    tabBarIcon: ({ color, size }) => (<Image
                        source={MapIcon}
                        style={{ width: size, height: size, tintColor: color }}
                        resizeMode="contain"
                    />),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ color, size }) => (<Image
                        source={SettingsIcon}
                        style={{ width: size, height: size, tintColor: color }}
                        resizeMode="contain"
                    />),
                }}
            />
        </Tabs>
    );
}
