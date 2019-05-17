import {observer} from "mobx-react";
import {Component} from "react";
import {Scene} from "react-native-router-flux";
import * as React from "react";
import {PixelRatio, StyleSheet, View} from "react-native";
import {InboxScreen} from "./Inbox";


@observer
export class HomeScreen extends Component {
    render() {
        return (
            <Scene key="main" tabs={true} tabBarStyle={styles.tabBar} default="tab1">
                <Scene key="tab1"
                       title="MyTab"
                       iconName="tags"
                       // icon={TabIcon}
                       hideNavBar={true}
                       component={InboxScreen}
                       initial={true}
                />
                <Scene key="NewsFeed"
                       title="MainNewssFed"
                       iconName="newspaper-o"
                       // icon={TabIcon}
                       hideNavBar={true}
                       component={InboxScreen}
                />

                <Scene key="settings"
                       iconName="gear"
                       // icon={TabIcon}
                       hideNavBar={true}
                       title="Inbox"
                       component={InboxScreen}
                />
            </Scene>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98
    },
    navigationBarStyle: {
        backgroundColor: 'red',
    },
    navigationBarTitleStyle: {
        color: 'white',
    },
});