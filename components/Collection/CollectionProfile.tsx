import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet, Image } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { Profile } from "../../models/Profile";
import { DefaultColor } from "../../constants/Colors";
import { Avatar } from "react-native-elements";

interface IProps {
    profile: Profile;
}

export default function CollectionProfile(props: IProps) {

    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const { pk, name, isFollowed, backgroundPhoto, followers, profilePhoto, introduction } = props.profile;

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.bgContainer}>
                    <Image
                        source={{ uri: backgroundPhoto }}
                        style={styles.imageStyle}
                    />

                </View>
                <Avatar
                    source={{ uri: profilePhoto }}
                    size={180}
                    containerStyle={styles.avatarStyle}
                />
            </View>

            <View style={styles.infoContainer}>
                <PoppinText
                    style={{
                        fontFamily: 'poppins-semibold',
                        fontSize: 18,
                        marginBottom: 20
                    }}
                >
                    {name} The Giver
                </PoppinText>
                <PoppinText style={{
                    color: DefaultColor.darken,
                    textAlign: "justify"
                }}>
                    {introduction}
                </PoppinText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    bgContainer: {
        flex: 0,
        height: Dimensions.get('screen').height * 0.25,
        width: '100%',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: DefaultColor.darken,
        marginBottom: 100
    },
    imageStyle: {
        flex: 0,
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    avatarStyle: {
        flex: 0,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    infoContainer: {
        flex: 0,
        marginVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 30
    }
});