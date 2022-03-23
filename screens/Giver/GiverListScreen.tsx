import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useRef, useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Animated, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { GiverData } from "../../constants/GiverData";
import { Profile } from "../../models/Profile";
import GiverProfile from "../../components/Giver/GiverProfile";

export default function GiverListScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const DATA = GiverData();
    const CARD_HEIGHT = 50;
    const ITEM_SIZE = CARD_HEIGHT + 10 * 4;

    const scrollY = useRef(new Animated.Value(0)).current;

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
                transform: [{
                    scale
                }],
                opacity
            }}>
                <GiverProfile
                    key={index}
                    profile={item}
                />
            </Animated.View>
        );
    }

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>

                <Animated.FlatList
                    data={DATA}
                    renderItem={_renderItem}
                    keyExtractor={item => item.pk}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        padding: 20
    }
});