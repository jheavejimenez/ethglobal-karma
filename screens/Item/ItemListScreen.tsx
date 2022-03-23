import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useRef, useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Animated, FlatList, ScrollView, StyleSheet, useColorScheme } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { Card } from "react-native-elements";
import { PostData } from "../../constants/PostData";
import { DefaultColor } from "../../constants/Colors";


export default function ItemListScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const data = PostData();
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.white : DefaultColor.black;
    const CARD_HEIGHT = 200;
    const ITEM_SIZE = CARD_HEIGHT + 10 * 4;;

    const _renderItem = ({ item, index }) => {
        const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2)
        ];

        const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2)
        ];

        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0]
        });

        const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0]
        });

        return (
            <Animated.View style={{
                height: 230,
                transform: [{
                    scale
                }],
                opacity
            }}>
                <Card
                    containerStyle={{
                        flex: 1,
                        backgroundColor: themeColor,
                        borderColor: colorScheme === 'light' ? DefaultColor.darken : '#1C4759'
                    }}
                >
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri: item.image
                        }}
                    />
                </Card>
            </Animated.View>
        );
    }

    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <Animated.FlatList
                    data={data}
                    renderItem={_renderItem}
                    keyExtractor={item => item.pk}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                />
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    }
});