import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoutContaier: {
        width: '100%',
        padding: 10,
        alignItems: 'flex-end',
    },
    logoutButton: {
        backgroundColor: 'gray',
        padding: 8,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    settings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    settingsTitle:{
        fontWeight: 'bold',
        fontSize: 20
    }
})