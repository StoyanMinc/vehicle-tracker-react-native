import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'black',
    },
    container: {
        flexGrow: 1,
    },
    carContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth: 0.2,
        borderBottomColor: 'gray'
    },

})