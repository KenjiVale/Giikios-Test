import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    header: {
        height: '7%',
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        alignContent: 'space-between',
    },
    iconContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,

    },
    icon: {
        flex: 1,
        resizeMode: 'contain',

    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

export default styles;