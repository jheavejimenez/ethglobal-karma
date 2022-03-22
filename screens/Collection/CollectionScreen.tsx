import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Platform, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { CollectionParamList } from "../../types";
import { CollectionProfile } from "../../components/Collection";

type IRoute = {
    "params": CollectionParamList['Collection'];
}

export default function CollectionScreen() {
    const route = useRoute<RouteProp<IRoute, "params">>();
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const profile = route.params.profile
    const { pk, name, isFollowed, backgroundPhoto, followers, profilePhoto, introduction } = profile;

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <CollectionProfile
                    profile={profile}
                />
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 10,
    }
});