import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5
    },
    speedText: {
        color: 'gray',
        fontWeight: 'bold'
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
        fontWeight: 'bold'
    },
    number: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 3,
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold'
    },
    wheelIconContainer: {
        padding: 3,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
    },
    wheelIcon: {
        width: 20,
        height: 20,
    },
    yellowCard: {
        width: 20,
        height: '100%',
        backgroundColor: 'yellow',
        borderRadius: 5,
    }
})