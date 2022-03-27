import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Dimensions, StyleSheet, Image, ScrollView, Platform } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { HomeParamList } from "../../types";
import { DefaultColor } from "../../constants/Colors";
import { ItemProfileTitle } from "../../components/Item";
import ItemDescription from "../../components/Item/ItemDescription";
import { DefaultButton } from "../../components/Button/DefaultButton";

type IRoute = {
    "params": HomeParamList['ItemDetail'];
}

export default function ItemDetailScreen() {
    const route = useRoute<RouteProp<IRoute, "params">>();
    const post = route.params.post;
    const { pk, title, description, image } = post;

    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ height: '100%' }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: post.image }}
                            style={{
                                height: '100%',
                                width: '100%',
                                resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <ItemProfileTitle
                        post={post}
                    />
                    <ItemDescription
                        description={description}
                    />
                    <View style={styles.buttonContainer}>

                        <DefaultButton
                            title="Message"
                            icon={{ name: 'chatbox-outline', color: DefaultColor.white }}
                            onPress={() => {
                                navigation.navigate("Chat");
                            }}
                        />
                        <DefaultButton
                            title="View Location"
                            backgroundColor={DefaultColor.secondary}
                            icon={{ name: 'location-outline', color: DefaultColor.white }}
                        />
                    </View>
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 10 : 20
    },
    imageContainer: {
        flex: 0,
        height: Dimensions.get('window').height * .35,
        width: '100%',
        borderWidth: 1,
        borderColor: DefaultColor.darken,
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden',
    },
    buttonContainer: {
        flex: 0,
        alignSelf: 'flex-end'
    }
});