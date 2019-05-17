import {observer} from "mobx-react";
import {Component} from "react";
import {View} from "react-native";
import {Colors} from "../../../common";
import * as React from "react";

@observer
export class InboxScreen extends Component {
    render() {
        return(<View style={{flex: 1, backgroundColor: Colors.PRIMARY}}/>)
    }
}