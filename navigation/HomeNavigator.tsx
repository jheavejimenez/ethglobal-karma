import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen } from "../screens/Home";
import { ItemDetailScreen, ItemListScreen, ItemPostScreen } from "../screens/Item";
import { HomeParamList } from "../types";
import useColorScheme from '../hooks/useColorScheme';
import { DefaultColor } from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import CollectionNavigator from "./CollectionNavigator";


const Stack = createNativeStackNavigator<HomeParamList>();

export default function HomeNavigator() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <Stack.Navigator
            initialRouteName="Feed"
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
            <Stack.Screen name="Feed" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="ItemList"
                component={ItemListScreen}
                options={{
                    title: 'Item List'
                }}
            />
            <Stack.Screen
                name="ItemDetail"
                component={ItemDetailScreen}
                options={{
                    title: 'Details'
                }}
            />
            <Stack.Screen
                name="ItemPost"
                component={ItemPostScreen}
                options={{
                    title: 'Item Post'
                }}
            />
            <Stack.Screen
                name="CollectionHome"
                component={CollectionNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
