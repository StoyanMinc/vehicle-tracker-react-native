import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
        gap: 20
    },
    kmContainer: {
        display: 'flex',
        padding: 0,
        margin: 0
    },
    speedText: {
        color: '#707380',
        fontWeight: 'bold',
        fontSize: 12
    },
    carIcon: {
        width: 50,
        height: 50,
    },
    infoContainer: {
        display: 'flex',
        gap: 15
    },
    statsContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 7
    },
    carNameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12

    },
    number: {
        borderWidth: 1,
        borderColor: '#3a3e4b',
        borderRadius: 5,
        padding: 6,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12

    },
    wheelIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#3a3e4b',
    },
    wheelIcon: {
        width: 15,
        height: 15,
    },
    yellowCard: {
        width: 20,
        height: '100%',
        backgroundColor: 'yellow',
        borderRadius: 5,
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