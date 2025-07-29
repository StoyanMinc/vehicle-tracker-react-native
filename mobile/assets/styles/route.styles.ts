import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 18,
        alignItems: 'center',
        gap: 15,
    },
    routeImageContainer: {
        width: 80, // Or whatever matches your layout
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    routeImage: {
        width: 60,
        height: 60,
    },
    infoContainer: {
        display: 'flex',
        gap: 15,
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
    },
    routeText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    kmText: {
        color: 'white',
        fontWeight: 'bold',
        borderColor: '#3a3e4b',
        borderWidth: 1,
        borderRadius: 5,
        padding: 6,
        fontSize: 12
    },
    dateText: {
        color: '#368eee',
        fontWeight: 'bold',
        fontSize: 12
    },
    playButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#363946',
        paddingVertical: 20,
        paddingHorizontal: 7,
        borderRadius: 10
    }
})