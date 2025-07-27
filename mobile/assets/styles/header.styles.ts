import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 8
    },

    search: {
        borderColor: 'gray',
        borderRadius: 50,
        borderWidth: 1,
        padding: 12
    },

    searchIcon: {
        width: 22,
        height: 22,
    },

    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 10
    },

    bellIcon: {
        width: 20,
        height: 20,
    },

    menuContainer: {
        gap: 3,
        justifyContent: 'center',
    },

    menuLine: {
        width: 20,
        height: 2,
        backgroundColor: 'white',
        borderRadius: 2,
    }
})