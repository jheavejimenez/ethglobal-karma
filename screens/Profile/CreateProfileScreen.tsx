import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import TextField from "../../components/TextInput/TextField";
import { DefaultButton } from "../../components/Button/DefaultButton";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims"

// Import the ethers library
import { ethers } from "ethers";
import { createProfile } from "../../repositories/profile/create-profile";


export default function CreateProfileScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const [text, setText] = useState<string>("");

    const handleCreateProfile = () => {
        setLoading(true);
        createProfile(text)
            .then(() => {
                navigation.navigate("LoggedProfile");
            })
            .catch((error: any) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <TextField
                    label="Nickname"
                    setText={setText}
                    text={text}
                />
                <DefaultButton
                    title="SUBMIT"
                    onPress={handleCreateProfile}
                />
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
});