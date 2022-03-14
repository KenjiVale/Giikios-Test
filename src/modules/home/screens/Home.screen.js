import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/home.style';
import Lists from './../../../components/Lists';
import data from '../data/data.json'

const Home = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../../../assets/icons/back.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>E-Wallet</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../../../assets/icons/search.png')}
                        style={styles.icon}
                    />
                </View>
            </View>
            {/* Main  */}
            {
                data.map((val, key) => {
                    return (
                        <Lists question={val.judul} key={key} />
                    )

                })
            }

        </View>
    )
}

export default Home;

