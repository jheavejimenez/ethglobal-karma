import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextInput, useColorScheme, ViewStyle } from "react-native";
import { Surface } from "react-native-paper";
import { DefaultColor } from "../../constants/Colors";
import { PoppinText } from "../StyledText";
import { View } from "../Themed";

interface IProps {
    text: string;
    setText: (value: string) => void;
    label: string;
    secureEntry?: boolean;
    multiline?: boolean;
    toggleEye?: () => void;
    showPassword?: boolean;
    inputStyle?: StyleProp<ViewStyle>;
    errorMessage?: string;
    touched?: boolean;
    keyboardType?: KeyboardTypeOptions;
    phoneCode?: string;
    placeholder?: string;
    onPressIn?: () => void;
    disabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
}

export default function TextField(props: IProps) {
    const colorScheme = useColorScheme();

    return (
        <View style={[styles.container, props.containerStyle]}>
            <PoppinText style={styles.labelContainer}>
                {props.label}
            </PoppinText>
            <Surface style={[styles.surfaceContainer, { borderColor: DefaultColor.main }]}>
                <View style={{ flex: 0, flexDirection: 'row', borderRadius: 9, overflow: 'hidden' }}>
                    {props.phoneCode !== undefined &&
                        <View style={styles.affixContainer}>
                            <PoppinText style={styles.phoneContainer}
                            >
                                {props.phoneCode}
                            </PoppinText>
                        </View>
                    }
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <TextInput
                            value={props.text}
                            onChangeText={props.setText}
                            secureTextEntry={props.secureEntry}
                            multiline={props.multiline}
                            placeholder={props.placeholder}
                            style={[styles.inputContainer, { color: colorScheme === 'light' ? "#000" : "#fff" }, props.inputStyle]}
                            autoCorrect={false}
                            keyboardType={props.keyboardType}
                            autoCapitalize={'none'}
                            clearButtonMode={'while-editing'}
                            placeholderTextColor={"#C9C9C9"}
                            textAlignVertical={props.multiline ? "top" : "center"}
                            onPressIn={props.onPressIn}
                            editable={props.disabled}

                        />
                    </View>
                    {props.secureEntry !== undefined &&
                        <View style={styles.affixContainer}>
                            <Ionicons
                                name={props.showPassword ? "eye-off" : "eye"}
                                size={24}
                                color={colorScheme === 'light' ? "#000" : "#fff"}
                                style={styles.eyeContainer}
                                onPress={props.toggleEye}
                            />
                        </View>
                    }
                </View>
            </Surface>

            {props.touched && props.errorMessage &&
                <PoppinText style={styles.errorStyle}>{props.errorMessage}</PoppinText>
            }
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 0,
        marginVertical: 10,
        overflow: 'hidden'
    },
    inputContainer: {
        flex: 0,
        height: 50,
        width: '100%',
        overflow: 'hidden',
        paddingVertical: 10,
    },
    labelContainer: {
        paddingHorizontal: 0,
    },
    errorStyle: {
        color: 'red',
        marginTop: 5,
        marginBottom: 10
    },
    eyeContainer: {
        margin: 10
    },
    surfaceContainer: {
        flex: 0,
        elevation: 4,
        borderRadius: 10,
        borderWidth: 1,
        overflow: 'hidden'
    },
    phoneContainer: {
        flex: 0,
        backgroundColor: 'white',
        marginLeft: 10,
        borderRadius: 100,
    },
    affixContainer: {
        flex: 0,
        justifyContent: 'center'
    }
});