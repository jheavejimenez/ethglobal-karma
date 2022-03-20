import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Button } from "react-native-elements";
import { Surface } from "react-native-paper";
import { DefaultColor } from "../../constants/Colors";

interface IProps {
    title: string;
    type?: any;
    backgroundColor?: string;
    onPress?: () => void;
    icon?: { name: any, color: string | undefined };
    titleStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
}

export function DefaultButton(props: IProps) {

    return (
        <Surface style={[styles.surface, { backgroundColor: props.backgroundColor ? props.backgroundColor : DefaultColor.main, borderColor: props.backgroundColor ? props.backgroundColor : DefaultColor.white, }]}>
            <Button
                title={props.title}
                buttonStyle={[styles.buttonStyle, { backgroundColor: props.backgroundColor, }]}
                type={props.type ? props.type : "solid"}
                onPress={props.onPress}
                titleStyle={[{ fontFamily: 'poppins-regular' }, props.titleStyle]}
                containerStyle={[{ width: '100%' }, props.buttonStyle]}
                icon={
                    props.icon &&
                    <Ionicons name={props.icon.name} size={24} color={props.icon.color ? props.icon.color : DefaultColor.dark} style={{ marginLeft: 5 }} />
                }
                iconPosition="right"
            />
        </Surface>
    );
}


const styles = StyleSheet.create({
    surface: {
        flex: 0,
        elevation: 4,
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyle: {
        paddingVertical: 5,
    }
});