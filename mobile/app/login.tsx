import { styles } from '@/assets/styles/login.styles';
import { useUserContext } from '@/contexts/UserContext';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import bgImage from '@assets/img/login-bg.jpg';

export default function Login() {

    const { user } = useUserContext();
    const { login } = useAuth();
    const router = useRouter();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const loginHandler = async () => {
        try {
            const result = await login(username, password);
            console.log(result);
            router.replace('/statistic'); // Redirect to root (tab layout)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (user) {
            router.replace('/statistic');
        }
    }, [user]);

    return (<ImageBackground source={bgImage} style={styles.background}>
        <View style={styles.overlay} />
        <View style={styles.container}>
            <Text style={styles.title}>Please Login</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={username}
                placeholder="username"
                placeholderTextColor='white'
                onChangeText={(emailAddress) => setUsername(emailAddress)}
            />

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                value={password}
                placeholder="password"
                placeholderTextColor='white'
                secureTextEntry={true}
                onChangeText={(emailAddress) => setPassword(emailAddress)}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={loginHandler}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    );
}