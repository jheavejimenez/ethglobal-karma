import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { View, Text, } from "../../components/Themed";
import { Notification } from "../../models/Notification";
import moment from "moment";
import { Avatar, ListItem } from "react-native-elements";
import useColorScheme from "../../hooks/useColorScheme";
import { DefaultColor } from "../../constants/Colors";
import { PoppinText } from "../StyledText";

interface IProps {
    notification: Notification;
    index: number;
}

export default function NotificationItem(props: IProps) {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);

    const colorScheme = useColorScheme();

    const themeMainColor = colorScheme === 'light' ? DefaultColor.main : DefaultColor.secondary;
    const themeMainColorReverse = colorScheme === 'dark' ? DefaultColor.main : DefaultColor.secondary;
    const themeViewColor = colorScheme === 'dark' ? DefaultColor.black : DefaultColor.white;
    const themeTextColor = colorScheme === 'dark' ? DefaultColor.white : DefaultColor.black;
    const themeSubTextColor = colorScheme === 'dark' ? DefaultColor.dark : '#6E6D7A';

    return (
        <View>
            <Pressable
                onPress={() => { }}
            >
                <ListItem
                    topDivider={props.index === 0 && true}
                    bottomDivider
                    containerStyle={{
                        backgroundColor: props.notification.read ? themeViewColor : DefaultColor.lighMain,
                        marginBottom: 1
                    }}>
                    <Avatar
                        source={{ uri: props.notification.avatar }}
                        size={45}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{ color: themeTextColor, fontFamily: 'poppins-semibold' }}
                            numberOfLines={1}
                        >
                            {props.notification.title}
                        </ListItem.Title>
                        <ListItem.Subtitle
                            style={{ color: themeSubTextColor, fontFamily: 'poppins-regular' }}
                            numberOfLines={1}
                        >
                            {props.notification.message}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                    <PoppinText >{moment(props.notification.createAt).format("MM/DD/YYYY")}</PoppinText>
                </ListItem>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});