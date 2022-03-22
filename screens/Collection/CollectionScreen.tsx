import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { CollectionParamList } from "../../types";
import { CollectionProfile } from "../../components/Collection";
import CollectionTopTab from "../../navigation/CollectionTopTab";
import { UnderlineButton } from "../../components/Button/UnderlineButton";
import CollectionItem from "../../components/Collection/CollectionItem";
import CollectionHistory from "../../components/Collection/CollectionHistory";

type IRoute = {
    "params": CollectionParamList['Collection'];
}

export default function CollectionScreen() {
    const route = useRoute<RouteProp<IRoute, "params">>();
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const [isItem, setIsItem] = useState<boolean>(true);

    const profile = route.params.profile
    const { pk, name, isFollowed, backgroundPhoto, followers, profilePhoto, introduction } = profile;

    return (
        <ViewWithLoading loading={loading}>
            <View style={{
                flexGrow: 1
            }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, padding: 10 }}

                >
                    <View style={styles.container}>
                        <CollectionProfile
                            profile={profile}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <UnderlineButton
                            title="Items"
                            buttonStyle={{ marginRight: 10 }}
                            active={isItem}
                            onPress={() => {
                                setIsItem(true);
                            }}
                        />
                        <UnderlineButton
                            title="History"
                            buttonStyle={{ marginLeft: 10 }}
                            active={!isItem}
                            onPress={() => {
                                setIsItem(false);
                            }}
                        />
                    </View>
                    <View style={{ flex: 0, paddingHorizontal: 30 }}>
                        {isItem ?
                            <CollectionItem />
                            :
                            <CollectionHistory />
                        }
                    </View>
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    },
    buttonContainer: {
        flex: 0,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 30
    }
});