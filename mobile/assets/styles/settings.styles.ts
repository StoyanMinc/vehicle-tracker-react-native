import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    container: {
        flexGrow: 1,
        gap: 10
    },
    techContainer: {
        display: 'flex',
        width: '100%',
        paddingBottom: 20,
        borderWidth: 2,
        borderColor: '#d9d9dc',
        borderTopWidth: 0,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    headerContainer: {
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 5
    },
    notification: {
        width: 8,
        height: 8,
        backgroundColor: '#24c26b',
        borderRadius: 50
    },
    infoContainer: {
        display: 'flex',
        padding: 20,
        gap: 10
    },
    tollContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    statusText: {
        color: '#707380',
        fontSize: 12,
        fontWeight: 'bold'
    },
    invalid: {
        color: 'red'
    },
    valid: {
        color: '#24c26b'
    },
    statusValuesText: {
        fontWeight: 'bold',
        fontSize: 12
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    },
    deleteButton: {
        backgroundColor: '#707380',
        width: '43%',
        borderRadius: 25,
        paddingVertical: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    updateButton: {
        backgroundColor: '#0b7df9',
        width: '43%',
        paddingVertical: 10,
        borderRadius: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    updateButtonInvalid: {
        backgroundColor: '#0b7df9',
    },
     updateButtonValid: {
        backgroundColor: '#b9babf',
    },
    tabBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
    tabBarText: {
        fontWeight: '500',
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: '#707380'
    },
    
    activeTab: {
        color: '#368eee',
        borderBottomColor: '#368eee',
        borderBottomWidth: 3
    }
})