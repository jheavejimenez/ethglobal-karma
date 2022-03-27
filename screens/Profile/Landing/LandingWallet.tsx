import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useState } from "react";
import { Dimensions, ImageBackground, StyleSheet, useColorScheme } from "react-native";
import { View } from "../../../components/Themed";
import { PoppinText } from "../../../components/StyledText";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { DefaultColor } from "../../../constants/Colors";
import { Surface } from "react-native-paper";
import { DefaultButton } from "../../../components/Button/DefaultButton";
import LottieView from 'lottie-react-native';
import { login } from "../../../repositories/authentication/login";
import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, utils } from 'ethers';
import { omit } from '../../../helpers';

interface IProps {
    setLoading: (_: boolean) => void;
    handleConnectWallet: () => void;
}

export default function LandingWallet(props: IProps) {
    const { setLoading, handleConnectWallet } = props;
    const navigation = useNavigation();
    const colorScheme = useColorScheme() === 'light' ? DefaultColor.white : DefaultColor.black;
    const bgLand = useColorScheme() === 'light' ? require('../../../assets/images/bg-land-light.png') : require('../../../assets/images/bg-land-dark.jpg');
    const connector = useWalletConnect();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={bgLand}
                style={[styles.container, styles.topContainer]}
                resizeMode={"cover"}
                resizeMethod={"resize"}
            >

            </ImageBackground>
            <Surface
                style={[styles.midContainer, { backgroundColor: colorScheme, borderColor: DefaultColor.darken, borderWidth: 1 }]}
            >
                <PoppinText style={styles.titleStyles}>
                    Ethglobal
                </PoppinText>
                <View style={{ height: 1, width: '90%', borderWidth: 1, marginVertical: 10, borderColor: DefaultColor.darken }} />
                <PoppinText style={styles.titleStyles}>
                    KARMA
                </PoppinText>
            </Surface>
            <View style={[styles.container, styles.bottomContainer]}>
                <DefaultButton
                    title={connector.connected ? "Sign In" : "Connect a wallet"}
                    onPress={handleConnectWallet}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        backgroundColor: DefaultColor.darken,
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        paddingHorizontal: 40,
        paddingBottom: 30
    },
    midContainer: {
        flex: 0,
        height: Dimensions.get('screen').height * 0.4,
        width: '80%',
        zIndex: 1,
        position: 'absolute',
        alignSelf: 'center',
        top: Dimensions.get('screen').height * 0.18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyles: {
        fontFamily: 'poppins-semibold',
        fontSize: 40
    }
});