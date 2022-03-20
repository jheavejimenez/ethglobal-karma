import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { View } from '../../components/Themed';
import { Avatar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { DefaultColor } from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';


export default function Header() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <View style={styles.container}>
            <Avatar
                size={64}
                rounded
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBMwRJfFeRL23d-4MB-yq_6NyJFUw7zprYQ&usqp=CAU' }}
                icon={{ name: 'pencil', type: 'font-awesome' }}
                containerStyle={{ backgroundColor: '#6733b9' }}
            />
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    iconContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    pressableContainer: {
        marginHorizontal: 10
    }
});