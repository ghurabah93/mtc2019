import {action} from "mobx";
import firebase from "react-native-firebase";
import {GoogleSignin} from "react-native-google-signin";

import {Error, ScreenConst, Utils} from '../common';
import {Actions} from "react-native-router-flux";

class LoginStore {
    @action initLogin = async () => {
        let clientId: string = Utils.GOOGLE_CLIENT_ID;
        await GoogleSignin.configure({webClientId: clientId, offlineAccess: true});
        await firebase.auth().onAuthStateChanged(this.userListener);
    };

    @action onLoginGoogle = () => {
        GoogleSignin.signIn()
            .then((data: any) => {
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
                return firebase.auth().signInWithCredential(credential);
            })
            .catch((error) => {
                console.log(Error.GOOGLE_LOGIN, error);
            });
    };

    @action userListener = async (user: any) => {
        if (user) {
            console.warn(user);
            Actions.replace(ScreenConst.HOME);

        }
    };
}

const store = new LoginStore();

export default store;