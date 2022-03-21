import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen } from "../screens/Home";
import { ItemDetailScreen, ItemListScreen } from "../screens/Item";
import { HomeParamList } from "../types";
import useColorScheme from '../hooks/useColorScheme';
import { DefaultColor } from "../constants/Colors";
import { TouchableOpacity } from "react-native";


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
            />
            <Stack.Screen
                name="ItemDetail"
                component={ItemDetailScreen}
                options={{
                    title: 'Details'
                }}
            />
        </Stack.Navigator>
    );
}
