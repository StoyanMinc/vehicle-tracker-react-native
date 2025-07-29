import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerWrapper: {
        position: 'relative',
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 8,
    },
    search: {
        borderColor: 'gray',
        borderRadius: 50,
        borderWidth: 1,
        padding: 12,
    },
    searchIcon: {
        width: 22,
        height: 22,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 10,
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
    },
    menuOverlay: {
        position: 'absolute', // ✅ Instead of absoluteFill
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 998,
    },
    hamMenuContainer: {
        position: 'absolute',
        width: '60%',
        top: 60,
        right: 10,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        zIndex: 999,
    },
    hamMenuText: {
        width: '100%',
        color: 'white',
        backgroundColor: 'gray',
        padding: 5,
        borderRadius: 7,
        fontWeight: 'bold',
        marginTop: 5
    },
});
