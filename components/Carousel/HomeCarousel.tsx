import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function ModalScreen() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
