import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { Platform, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { CollectionProfile } from "../../components/Collection";
import { Profile } from "../../models/Profile";
import { DefaultButton } from "../../components/Button/DefaultButton";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function LoggedScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const profile = new Profile(
        '1',
        'jrparreno',
        0,
        false,
        'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        '',
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when"
    );

    const connector = useWalletConnect();


    const killSession = React.useCallback(() => {
        AsyncStorage.removeItem('auth_token');
        navigation.navigate("Home");
        return connector.killSession();
    }, [connector]);

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <CollectionProfile
                    profile={profile}
                />
            </View>
            <View style={{ padding: 20 }}>
                <DefaultButton
                    title="Logout"
                    onPress={killSession}
                />
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 35 : 0
    }
});