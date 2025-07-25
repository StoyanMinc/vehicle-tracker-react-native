import SafeScreen from '@/components/SafeScreen';
import { UserContextProvider } from '@/contexts/UserContext';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {

    return (
        <SafeScreen>
            <StatusBar
                style="dark" // or "dark" depending on your theme
                backgroundColor="#000000" // Android only
            />
            <UserContextProvider>
                <Slot />
            </UserContextProvider>
        </SafeScreen>
    );
}
