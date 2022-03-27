import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { StyleSheet, Image, Dimensions, TextInput, Keyboard, ScrollView, Alert } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { DefaultButton } from "../../components/Button/DefaultButton";
import * as ImagePicker from 'expo-image-picker';
import { checkMediaPermission, checkCameraPermission } from "../../permissions/MediaPermission";
import TextField from "../../components/TextInput/TextField";
import { DefaultColor } from "../../constants/Colors";
import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import WalletConnectProvider from "@walletconnect/web3-provider";

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import "react-native-get-random-values"

// Import the the ethers shims (**BEFORE** ethers)
import "@ethersproject/shims"

// Import the ethers library
import { ethers } from "ethers";
import { omit } from "../../helpers";
import { splitSignature } from "ethers/lib/utils";
import { lensHub } from "../../lens-hub";
import { uploadIpfs } from "../../ipfs";
import { getProfilesRequest, ProfilesRequest } from "../../repositories/profile/get-profile";
import { createPostTypedData } from "../../repositories/publications/post";
import { useFocusEffect } from "@react-navigation/native";
import { Post } from "../../models/Post";
import { storeData } from "../../database/StoreData";



export default function ItemPostScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const [image, setImage] = useState<any | null>(null);
    const [text, setText] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [textHeight, setTextHeight] = useState(65);

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

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            console.log(result);
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            console.log(result);
        }
    }

    const handlePost = async () => {
        // createPost();
        setLoading(true);
        const post = new Post(
            '11',
            title,
            text,
            image
        );
        await storeData('post', JSON.stringify(post));

        setTimeout(() => {
            setLoading(false);
            Alert.alert("Karma", "Successfully posted", [
                {
                    text: "OK",
                    onPress: () => {
                        navigation.goBack()
                    },
                    style: 'default'
                }
            ]);
        }, 3000);
    }

    const signedTypeData = (
        domain: TypedDataDomain,
        types: Record<string, TypedDataField[]>,
        value: Record<string, any>
    ) => {
        return signer._signTypedData(
            omit(domain, '__typename'),
            omit(types, '__typename'),
            omit(value, '__typename')
        );
    };


    const createPost = async () => {
        // hard coded to make the code example clear
        console.log(connector.accounts[0].substring(0, 4));
        const profileId = "0xae";
        const createPostRequest = {
            profileId,
            contentURI: 'ipfs://bafkreiazg2jmc3pcblm2gzddufjip7x55gzt7zyhx5lzchmzzmjvxpgvcm',
            collectModule: {
                revertCollectModule: true,
            }, referenceModule: {
                followerOnlyReferenceModule: false,
            },
        };


        const result = await createPostTypedData(createPostRequest);
        console.log(result);
        // const typedData = result.data.createPostTypedData.typedData;

        // const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
        // const { v, r, s } = splitSignature(signature);

        // const tx = await lensHub.postWithSig({
        //     profileId: typedData.value.profileId,
        //     contentURI: typedData.value.contentURI,
        //     collectModule: typedData.value.collectModule,
        //     collectModuleData: typedData.value.collectModuleData,
        //     referenceModule: typedData.value.referenceModule,
        //     referenceModuleData: typedData.value.referenceModuleData,
        //     sig: {
        //         v,
        //         r,
        //         s,
        //         deadline: typedData.value.deadline,
        //     },
        // });
        // console.log(tx.hash);
        // 0x64464dc0de5aac614a82dfd946fc0e17105ff6ed177b7d677ddb88ec772c52d3
        // you can look at how to know when its been indexed here: 
        //   - https://docs.lens.dev/docs/has-transaction-been-indexed
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );


        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };

    }, []);

    const getProfile = async () => {
        getProfilesRequest({
            profileIds: ["0xae"]
        })
            .then((response: any) => {
                // console.log(response);
            })
            ;
    }

    useFocusEffect(
        useCallback(
            () => {
                getProfile();
            },
            [],
        )

    )

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardDismissMode={"on-drag"}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: image ? image : 'https://cdn.wallpapersafari.com/97/82/LvWIVR.jpg'
                            }}
                            style={styles.imageStyle}
                        />
                    </View>
                    <PoppinText>
                        Title
                    </PoppinText>
                    <TextInput
                        style={[styles.textFieldStyle, { height: 55 }]}
                        onChangeText={setTitle}
                        value={title}
                        autoFocus={false}
                        onFocus={() => { }}
                        focusable={true}
                        placeholder="Type here.."
                    />
                    <View style={styles.textContainer}>
                        <PoppinText>
                            Description
                        </PoppinText>
                        <TextInput
                            style={[styles.textFieldStyle, { minHeight: 55, maxHeight: 200 }]}
                            onChangeText={setText}
                            value={text}
                            autoFocus={false}
                            onFocus={() => { }}
                            focusable={true}
                            multiline={true}
                            placeholder="Type here.."
                            scrollEnabled={true}
                            onContentSizeChange={(e) => {
                                let current = textHeight + 50;
                                setTextHeight((e.nativeEvent.contentSize.height / 13) + current);
                            }}
                        />
                    </View>
                    <DefaultButton
                        title="Take Photo"
                        onPress={() => {
                            if (checkCameraPermission()) {
                                takePhoto();
                            }
                        }}
                    />
                    <DefaultButton
                        title="Upload Photo"
                        onPress={() => {
                            if (checkMediaPermission()) {
                                pickImage();
                            }
                        }}
                    />

                    <View style={{ marginTop: 30 }}>
                        <DefaultButton
                            title="POST"
                            onPress={() => {
                                handlePost();
                            }}
                            backgroundColor={DefaultColor.secondary}
                        />
                    </View>
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    imageStyle: {
        borderWidth: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    imageContainer: {
        flex: 0,
        height: 250,
        padding: 0,
        borderRadius: 10,
        borderWidth: 1,
        overflow: 'hidden',
        marginBottom: 10
    },
    textContainer: {
        flex: 1,
        paddingVertical: 20
    },
    textFieldStyle: {
        flex: 0,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden',
        fontFamily: 'poppins-regular',
        fontSize: 14,
        borderWidth: 1
    },
    textInputContainer: {
        flex: 0,
        height: '100%',
        borderWidth: 1
    },
});