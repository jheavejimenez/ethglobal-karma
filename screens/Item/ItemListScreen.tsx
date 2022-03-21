import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";


export default function ItemListScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>

            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    }
});