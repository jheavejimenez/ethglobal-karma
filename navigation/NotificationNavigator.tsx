import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen } from "../screens/Home";
import { ItemDetailScreen, ItemListScreen } from "../screens/Item";
import { NotificationParamList } from "../types";
import useColorScheme from '../hooks/useColorScheme';
import { DefaultColor } from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import CollectionNavigator from "./CollectionNavigator";
import { NotificationListScreen } from "../screens/Notification";


const Stack = createNativeStackNavigator<NotificationParamList>();

export default function NotificationNavigator() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <Stack.Navigator
            initialRouteName="NotificationList"
            screenOptions={({ navigation }) => ({
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={navigation.goBack}
                        style={{ paddingHorizontal: 10 }}
                    >
                        <Ionicons name="arrow-back-outline" size={24} color={themeColor} />
                    </TouchableOpacity>
                ),
                headerTitleStyle: { fontFamily: 'poppins-semibold', fontSize: 20 }
            })}
        >
            <Stack.Screen
                name="NotificationList"
                component={NotificationListScreen}
                options={{
                    title: 'Notifications',
                    headerLeft: () => null
                }}
            />
        </Stack.Navigator>
    );
}
