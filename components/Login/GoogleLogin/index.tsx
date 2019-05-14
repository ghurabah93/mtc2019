import * as React from 'react';
import {observer} from "mobx-react";
import {StyleSheet} from "react-native";
import {GoogleSigninButton} from "react-native-google-signin";

interface GoogleLoginProps {
    onPress: () => void
}

@observer
class GoogleLogin extends React.Component<GoogleLoginProps, {}> {

    render() {
        return (
            <GoogleSigninButton
                style={styles.googleButton}
                onPress={this.props.onPress}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}/>
        );
    }
}

const styles = StyleSheet.create({
    googleButton: {
        width: 312,
        height: 48,
        margin: 10,
    },
});

export default GoogleLogin;