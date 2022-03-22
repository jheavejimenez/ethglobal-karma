import * as React from "react";
import { PoppinText } from "../StyledText";
import { View } from "../Themed";
import { StyleSheet } from "react-native";
import { DefaultColor } from "../../constants/Colors";
import { Profile } from "../../models/Profile";
import { Avatar } from "react-native-elements";
import { FollowAbbrev } from "../../utils/FollowAbrrev";
import { DefaultButton } from "../Button/DefaultButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface IProps {
    profile: Profile
}

export default function GiverProfile(props: IProps) {
    const profile = props.profile;
    const { name, isFollowed, followers, profilePhoto } = profile;
    const [follow, setFollow] = useState<boolean>(isFollowed);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                    size={45}
                    rounded
                    source={{ uri: profilePhoto }}
                    onPress={() => {
                        navigation.navigate("CollectionHome", {
                            screen: 'Collection',
                            params: { profile: profile }
                        });
                    }}
                    overlayContainerStyle={{
                        elevation: 4
                    }}
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
                    title={follow ? "Following" : "Follow"}
                    onPress={() => setFollow(!follow)}
                    backgroundColor={follow ? DefaultColor.main : DefaultColor.secondary}
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