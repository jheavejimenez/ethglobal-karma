import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { ItemData } from "../../constants/ItemData";
import { DefaultColor } from "../../constants/Colors";

export default function CollectionItem() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    const images = ItemData();

    return (
        <View style={styles.container}>
            {images && images.map((image: string) => (
                <View
                    key={image}
                    style={{
                        width: '45%',
                        height: 100,
                        borderWidth: 1,
                        borderColor: DefaultColor.dark,
                        marginVertical: 10,
                        borderRadius: 10,
                        overflow: 'hidden'
                    }}>
                    <Image
                        source={{ uri: image }}
                        style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover'
                        }}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});