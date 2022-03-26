import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import * as React from "react";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';
import { DefaultButton } from "../../components/Button/DefaultButton";
import { PoppinText } from "../../components/StyledText";
import { Text, View } from '../../components/Themed';
import ViewWithLoading from "../../components/ViewWithLoading";
import LandingWallet from "./Landing/LandingWallet";
import { authenticate, generateChallenge, login } from "../../repositories/authentication/login";
import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import WalletConnectProvider from "@walletconnect/web3-provider";

import { omit, prettyJSON } from '../../helpers';
import { getAuthenticationToken, setAuthenticationToken } from "../../state";
import { getData, storeData } from "../../database/StoreData";
import { createProfile } from "../../repositories/profile/create-profile";

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims"

// Import the ethers library
import { ethers } from "ethers";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function ProfileScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    const connector = useWalletConnect();

    const provider = new WalletConnectProvider({
        rpc: {
            80001: 'https://rpc-mumbai.maticvigil.com/',
        },
        chainId: 80001,
        connector: connector,
        qrcode: false,
    });
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();

    const connectWallet = React.useCallback(() => {
        return connector.connect()
            .then((response: any) => {
                provider.enable();
                login(response.accounts[0]);
                // createProfile(response.accounts[0]);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }, [connector]);

    const killSession = React.useCallback(() => {
        AsyncStorage.removeItem('auth_token');
        return connector.killSession();
    }, [connector]);

    const signText = (text: string) => {
        return signer.signMessage(text);
        ;
    };

    const login = async (address: string) => {
        if (getAuthenticationToken()) {
            navigation.navigate("CreateProfile");

            return;
        }

        console.log('login: address', address);
        // const token = await getData('auth_token');
        // we request a challenge from the server
        const challengeResponse = await generateChallenge(address);
        const signature = await signText(challengeResponse.data.challenge.text);

        if (signature !== null) {// sign the text with the wallet

            console.log(signature);
            const accessTokens = await authenticate(address, signature);
            prettyJSON('login: result', accessTokens.data);

            setAuthenticationToken(accessTokens.data.authenticate.accessToken);
            await storeData('auth_token', JSON.stringify(accessTokens.data));
            return accessTokens.data;
        }
        console.log("error");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: !connector.connected
        })

    }, [connector])

    return (
        <ViewWithLoading loading={loading}>
            <LandingWallet
                setLoading={setLoading}
                handleConnectWallet={connectWallet}
            />
            {!connector.connected ?
                <PoppinText>
                    not Connected
                </PoppinText>
                :
                <PoppinText>
                    Connected
                </PoppinText>
            }
            <DefaultButton
                title="Logout"
                onPress={killSession}
            />
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
