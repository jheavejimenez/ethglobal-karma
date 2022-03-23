import { useNavigation } from "@react-navigation/native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import * as React from "react";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';
import { DefaultButton } from "../../components/Button/DefaultButton";
import { PoppinText } from "../../components/StyledText";
import { Text, View } from '../../components/Themed';
import ViewWithLoading from "../../components/ViewWithLoading";
import LandingWallet from "./Landing/LandingWallet";

export default function ProfileScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    const connector = useWalletConnect();

    const killSession = React.useCallback(() => {
        return connector.killSession();
    }, [connector]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: connector.connected
        })

    }, [connector])

    return (
        <ViewWithLoading loading={loading}>
            {!connector.connected ?
                <LandingWallet />
                :
                <View style={{ alignItems: 'center' }}>
                    <PoppinText>
                        Connected
                    </PoppinText>
                    <DefaultButton
                        title="Logout"
                        onPress={killSession}
                    />
                </View>
            }
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    imageContainer: {
        flex: 0,
        height: Dimensions.get('window').height * .35,
        width: '100%',
        marginBottom: 20,
        overflow: 'hidden',
    },
});
