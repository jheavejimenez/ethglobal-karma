import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { DefaultColor } from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import { useState } from "react";

interface IProps {
    description: string;
}

export default function ItemDescription(props: IProps) {
    const { description } = props;
    const [expand, setExpand] = useState<boolean>(false);
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <TouchableOpacity
            onPress={() => setExpand(!expand)}
            style={styles.container}
        >
            <View style={styles.container}>
                <PoppinText
                    style={{
                        color: themeColor
                    }}
                    numberOfLines={expand ? undefined : 5}
                >
                    {description}

                </PoppinText>
                <PoppinText style={{
                    color: themeColor
                }}>
                    {expand ? '' : 'see more'}
                </PoppinText>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});