import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../configs/Window.dimension';

const Lists = (props) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.question}>
                    <Text style={styles.text} >{props.question}</Text>
                </View>
                <View style={styles.info}>
                    <Image
                        source={require('../assets/icons/blackNext.png')}
                        style={styles.icon}
                    />
                </View>
            </View>
            <View style={styles.line}></View>
        </View>

    )
}

export default Lists;

const styles = StyleSheet.create({
    container: {
        height: windowHeight * 50 / 667,
        width: windowWidth,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    question: {
        flex: 9,
        height: '100%',
        justifyContent: 'center'

    },
    info: {
        flex: 1,
        backgroundColor: "white",
        width: 10,
        height: 10,
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        resizeMode: 'contain',
    },
    text: {
        color: "#333333",
        fontSize: 16,
        fontWeight: '400',
        height: 18.75
    },
    line: {
        height: 1,
        width: windowWidth,
        backgroundColor: '#F5F5F5'
    }
})