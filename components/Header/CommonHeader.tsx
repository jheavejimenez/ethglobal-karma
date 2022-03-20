import { Ionicons } from "@expo/vector-icons";
import * as React from "react";
import { PoppinText } from "../StyledText";
import { View } from "../Themed";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { DefaultColor } from "../../constants/Colors";

interface IProps {
    title: string;
    onPress: () => void;
}

export default function CommonHeader(props: IProps) {
    const { title, onPress } = props;
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <View style={styles.titleContainer}>
            <PoppinText style={{
                fontFamily: 'poppins-semibold',
                fontSize: 18
            }}>
                {title}
            </PoppinText>
            <Pressable
                style={{ padding: 5 }}
                onPress={onPress}
            >
                <Ionicons name='arrow-forward-circle-outline' size={24} color={themeColor} />

            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    titleContainer: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    nearbyContainer: {
        flex: 0
    }
});