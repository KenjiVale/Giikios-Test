import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Button, ThemeProvider } from 'react-native-elements';
import Home from './../modules/home/screens/Home.screen';


const app = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Home />
            </NavigationContainer>
        </SafeAreaProvider>

    )
}

export default app

const styles = StyleSheet.create({})