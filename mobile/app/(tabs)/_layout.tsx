import { Redirect, Tabs } from 'expo-router';
import { useUserContext } from '@/contexts/UserContext';
import { Image, View } from 'react-native';
import StatisticIcon from '@assets/ic/stat-light-ic.png';
import MapIcon from '@assets/ic/map-light-ic.png';
import CarIcon from '@assets/ic/cars-light-ic.png';
import RoutesIcon from '@assets/ic/routes-light-ic.png';
import SettingsIcon from '@assets/ic/technical-light-ic.png';
import Header from '@/components/Header';

export default function TabLayout() {
    const { user } = useUserContext();
    console.log(user);

    if (!user) {
        return <Redirect href="/login" />;
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#007AFF',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        borderTopWidth: 1,
                        borderTopColor: '#ccc',
                        paddingTop: 10

                    },
                }}
            >
                <Tabs.Screen
                    name="statistic"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 4,
                                    borderBottomWidth: focused ? 2 : 0,
                                    borderBottomColor: focused ? '#007AFF' : 'transparent',
                                }}
                            >
                                <Image
                                    source={StatisticIcon}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: color,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="map"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    borderBottomWidth: focused ? 2 : 0,
                                    borderBottomColor: focused ? '#007AFF' : 'transparent',
                                    paddingBottom: 4, // optional spacing
                                }}
                            >
                                <Image
                                    source={MapIcon}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: color,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="cars"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    borderBottomWidth: focused ? 2 : 0,
                                    borderBottomColor: focused ? '#007AFF' : 'transparent',
                                    paddingBottom: 4, // optional spacing
                                }}
                            >
                                <Image
                                    source={CarIcon}
                                    style={{
                                        width: 28,
                                        height: 28,
                                        tintColor: color,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="routes"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    borderBottomWidth: focused ? 2 : 0,
                                    borderBottomColor: focused ? '#007AFF' : 'transparent',
                                    paddingBottom: 4, // optional spacing
                                }}
                            >
                                <Image
                                    source={RoutesIcon}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: color,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        tabBarIcon: ({ color, size, focused }) => (
                            <View
                                style={{
                                    borderBottomWidth: focused ? 2 : 0,
                                    borderBottomColor: focused ? '#007AFF' : 'transparent',
                                    paddingBottom: 4, // optional spacing
                                }}
                            >
                                <Image
                                    source={SettingsIcon}
                                    style={{
                                        width: 22,
                                        height: 22,
                                        tintColor: color,
                                    }}
                                    resizeMode="contain"
                                />
                            </View>
                        ),
                    }}
                />
            </Tabs>
        </View>
    );
}
