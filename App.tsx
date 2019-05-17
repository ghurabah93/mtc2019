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
import {StyleSheet, View, StatusBar, PixelRatio, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Router, Stack, Scene} from 'react-native-router-flux';

import {LoginScreen} from "./scenes/Login";
import {Colors, ScreenConst} from "./common";
import {InboxScreen} from "./scenes/Home/Inbox";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
}

//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component<{ iconName: string, focused: boolean}, {}> {
    render() {
        let color = this.props.focused ? Colors.PRIMARY : Colors.GREY;

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center'
            }}>
                <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
            </View>
        );
    }
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
                        <Scene key="home" tabs={true} tabBarStyle={styles.tabBar} default="tab1"
                        showLabel={false}>
                            <Scene key="tab1"
                                   iconName="tags"
                                   icon={TabIcon}
                                   hideNavBar={true}
                                   component={InboxScreen}
                                   initial={true}
                            />
                            <Scene key="NewsFeed"
                                   iconName="newspaper-o"
                                   icon={TabIcon}
                                   hideNavBar={true}
                                   component={InboxScreen}
                            />


                            <Scene key="settings"
                                   iconName="gear"
                                   icon={TabIcon}
                                   hideNavBar={true}
                                   component={InboxScreen}
                            />

                            <Scene key="settings"
                                   iconName="gear"
                                   icon={TabIcon}
                                   hideNavBar={true}
                                   component={InboxScreen}
                            />
                        </Scene>
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
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98
    }
});