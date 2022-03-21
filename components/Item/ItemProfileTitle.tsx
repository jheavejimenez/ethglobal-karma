import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { Post } from "../../models/Post";
import { Avatar } from "react-native-elements";
import { GiverData } from "../../constants/GiverData";
import { DefaultColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";

interface IProps {
    post: Post;
}

export default function ItemProfileTitle(props: IProps) {
    const navigation = useNavigation();
    const { pk, title, description, image } = props.post;
    const data = GiverData()[0];
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                    size={45}
                    rounded
                    source={{ uri: image }}
                />
                <View style={styles.infoContainer}>
                    <PoppinText
                        style={{
                            color: themeColor,
                        }}
                    >
                        Giver
                    </PoppinText>
                    <PoppinText style={{
                        fontSize: 16
                    }}>
                        {data.name}
                    </PoppinText>
                </View>
            </View>
            <View style={styles.titleContainer}>
                <PoppinText
                    style={{
                        fontFamily: 'poppins-semibold',
                        fontSize: 24
                    }}
                    numberOfLines={1}
                >
                    {title}
                </PoppinText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
    },
    avatarContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 0,
        marginLeft: 10
    },
    titleContainer: {
        flex: 0,
    }
});