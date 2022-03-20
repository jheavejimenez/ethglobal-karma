import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { PoppinText } from "../StyledText";
import { View } from "../Themed";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { DefaultColor } from "../../constants/Colors";
import { Profile } from "../../models/Profile";
import { Avatar } from "react-native-elements";
import { FollowAbbrev } from "../../utils/FollowAbrrev";
import { DefaultButton } from "../Button/DefaultButton";

interface IProps {
    profile: Profile
}

export default function GiverProfile(props: IProps) {
    const { name, isFollowed, followers, image } = props.profile;
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: image }}
                />
                <View style={styles.infoContainer}>
                    <PoppinText style={{
                        fontFamily: 'poppins-semibold',
                        fontSize: 15
                    }}>
                        {name}
                    </PoppinText>
                    <PoppinText style={{
                        color: DefaultColor.darken,
                    }}>
                        {FollowAbbrev(followers)} { } Followers
                    </PoppinText>
                </View>
            </View>
            <View style={{
                minWidth: 80,
                maxWidth: 110
            }}>
                <DefaultButton
                    title={isFollowed ? "Followed" : "Follow"}
                    onPress={() => { }}
                    backgroundColor={isFollowed ? DefaultColor.main : DefaultColor.secondary}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    avatarContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 0,
        marginHorizontal: 10
    }
});