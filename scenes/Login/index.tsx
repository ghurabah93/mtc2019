import {observer} from "mobx-react";
import React, {Component} from 'react';
import {View, StyleSheet, Image, ImageStyle} from 'react-native';

import {Colors, IconConst} from "../../common";
import store from "../../stores/LoginStore";
import GoogleLogin from "../../components/Login/GoogleLogin";

@observer
export class LoginScreen extends Component {
    async componentDidMount() {
        await store.initLogin();
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderLoginScreen()}
            </View>
        );
    }

    renderLoginScreen = () =>
        <View style={styles.logoContainer}>
            {this.renderLogo()}
            {this.renderGoogleLogin()}
        </View>;

    renderLogo = () =>
        <View style={styles.logoContainer}>
            <Image style={styles.logo as ImageStyle}
                   source={{uri: IconConst.LOGO}}/>
        </View>;

    renderGoogleLogin = () =>
        <View style={styles.buttonContainer}>
            <GoogleLogin onPress={store.onLoginGoogle}/>
        </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        flexDirection: 'column'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 500,
        height: 337,
        marginBottom: 50
    },
    buttonContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-end',
        left: 0,
        right: 0,
        bottom: 20,
        height: 200,
        padding: 20
    }
});
