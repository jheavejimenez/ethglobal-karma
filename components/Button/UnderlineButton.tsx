import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { Surface } from "react-native-paper";
import { DefaultColor } from "../../constants/Colors";
import { PoppinText } from "../StyledText";

interface IProps {
    title: string;
    type?: any;
    backgroundColor?: string;
    onPress?: () => void;
    icon?: { name: any, color: string | undefined };
    titleStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    active?: boolean;
}

export function UnderlineButton(props: IProps) {

    return (
        <TouchableOpacity
            style={[styles.surface, {
                borderBottomWidth: 1,
                borderColor: props.active ? DefaultColor.main : DefaultColor.darken
            }, props.buttonStyle]}
            onPress={() => {
                if (props.onPress) props.onPress();
            }}
        >
            <PoppinText style={{
                fontFamily: 'poppins-semibold',
                fontSize: 18
            }}>
                {props.title}
            </PoppinText>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    surface: {
        flex: 1,
        overflow: 'hidden',
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        paddingVertical: 5,
    }
});