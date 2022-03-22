import * as React from 'react';
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { View } from '../../components/Themed';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { DefaultColor } from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { PoppinText } from '../StyledText';
import { DefaultButton } from '../Button/DefaultButton';
import { Surface } from 'react-native-paper';


export default function Header() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <View style={styles.container}>
            <View style={[styles.container, {
                flexDirection: 'row',
                justifyContent: 'space-between',
            }]}>
                <PoppinText style={styles.titleStyle}>
                    Karma
                </PoppinText>
                <View style={styles.iconContainer}>
                    <Pressable
                        style={styles.pressableContainer}
                    >
                        <Ionicons name='search-outline' size={24} color={themeColor} />
                    </Pressable>
                    <Pressable
                        style={styles.pressableContainer}
                    >
                        <Ionicons name='notifications-outline' size={24} color={themeColor} />
                    </Pressable>
                </View>
            </View>

            <View style={[styles.container, {
                flexDirection: 'row',
            }]}>
                <Avatar
                    size={64}
                    rounded
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&usqp=CAU' }}
                    icon={{ name: 'pencil', type: 'font-awesome' }}
                    containerStyle={{ backgroundColor: '#6733b9' }}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                >
                    <PoppinText style={styles.textStyle}>
                        Share something?
                    </PoppinText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        paddingVertical: 10,
    },
    iconContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressableContainer: {
        marginHorizontal: 10
    },
    titleStyle: {
        fontFamily: 'poppins-semibold',
        fontSize: 25
    },
    buttonStyle: {
        flex: 0,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'justify',

    },
    textStyle: {
        borderWidth: 1,
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        borderColor: DefaultColor.darken,
        textAlignVertical: 'bottom',
        fontFamily: 'poppins-semibold',

    }
});