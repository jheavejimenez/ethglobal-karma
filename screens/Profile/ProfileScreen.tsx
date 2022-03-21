import * as React from "react";
import { useState } from "react";
import { StyleSheet, Image, Dimensions } from 'react-native';
import { DefaultButton } from "../../components/Button/DefaultButton";
import { PoppinText } from "../../components/StyledText";
import { Text, View } from '../../components/Themed';
import ViewWithLoading from "../../components/ViewWithLoading";
import { login } from "../../repositories/authentication/login-user"


export default function ProfileScreen() {
    const [loading, setLoading] = useState<boolean>(false);
    const [connect, setConnect] = useState<boolean>(false);

    const handleConnect = () => {
        login();
        setConnect(true);
    }

    const handleTestMetaMask = () => {
        // TODO test meta mask;
        setConnect(false);
    }

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                {!connect ?
                    <React.Fragment>
                        <View style={styles.imageContainer}>
                            <Image
                                source={{
                                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png'
                                }}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    resizeMode: 'cover'
                                }}
                            />
                        </View>
                        <DefaultButton
                            title="Connect MetaMask"
                            onPress={handleConnect}
                        />
                    </React.Fragment>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <PoppinText>
                            Connected
                        </PoppinText>
                        <DefaultButton
                            title="Test Connection"
                            onPress={handleTestMetaMask}
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
