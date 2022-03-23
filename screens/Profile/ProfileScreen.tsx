import { useWalletConnect } from "@walletconnect/react-native-dapp";
import * as React from "react";
import { useState } from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';
import { DefaultButton } from "../../components/Button/DefaultButton";
import { PoppinText } from "../../components/StyledText";
import { Text, View } from '../../components/Themed';
import ViewWithLoading from "../../components/ViewWithLoading";

export default function ProfileScreen() {
    const [loading, setLoading] = useState<boolean>(false);

    const connector = useWalletConnect();

    const connectWallet = React.useCallback(() => {
        return connector.connect();
    }, [connector]);

    const killSession = React.useCallback(() => {
        return connector.killSession();
    }, [connector]);


    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                {!connector.connected ?
                    <React.Fragment>
                        <DefaultButton
                            title="Connect a wallet"
                            onPress={connectWallet}
                        />
                    </React.Fragment>
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
            </View>
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
