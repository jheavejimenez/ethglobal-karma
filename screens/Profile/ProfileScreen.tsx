import * as React from "react";
import { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import ViewWithLoading from "../../components/ViewWithLoading";

export default function ProfileScreen() {
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <ViewWithLoading loading={loading}>

        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
