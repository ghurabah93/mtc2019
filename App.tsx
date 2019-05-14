/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Router, Stack, Scene} from 'react-native-router-flux';

import {LoginScreen} from "./scenes/Login";
import {Colors, ScreenConst} from "./common";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

interface Props {
}

export default class App extends Component<Props> {
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={Colors.SECONDARY}/>
                <Router backAndroidHandler={() => (false)}>
                    <Stack key={ScreenConst.ROOT}>
                        <Scene hideNavBar
                               key={ScreenConst.LOGIN}
                               component={LoginScreen}/>
                    </Stack>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});