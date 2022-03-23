import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { CollectionParamList } from "../types";
import useColorScheme from '../hooks/useColorScheme';
import { DefaultColor } from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import { CollectionScreen } from "../screens/Collection";
import { GiverListScreen } from "../screens/Giver";


const Stack = createNativeStackNavigator<CollectionParamList>();

export default function CollectionNavigator() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <Stack.Navigator
            initialRouteName="Collection"
            screenOptions={({ navigation }) => ({
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={{ paddingHorizontal: 10 }}
                    >
                        <Ionicons name="arrow-back-outline" size={24} color={themeColor} />
                    </TouchableOpacity>
                )
            })}
        >
            <Stack.Screen
                name="Collection"
                component={CollectionScreen}
                options={{
                    title: 'Collections'
                }}
            />
            <Stack.Screen
                name="GiverList"
                component={GiverListScreen}
                options={{
                    title: 'Giver List'
                }}
            />
        </Stack.Navigator>
    );
}
