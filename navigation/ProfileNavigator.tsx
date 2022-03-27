import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { DefaultColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { createProfile } from "../repositories/profile/create-profile";
import { ChatListScreen } from "../screens/Chat";
import { LoggedScreen, ProfileScreen } from "../screens/Profile";
import CreateProfileScreen from "../screens/Profile/CreateProfileScreen";
import { ProfileParamList } from "../types";


const Stack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;


    return (
        <Stack.Navigator
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
                name="UserProfile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerLeft: () => null
                }}
            />
            <Stack.Screen
                name="CreateProfile"
                component={CreateProfileScreen}
                options={{
                    title: 'Create Profile',
                    headerLeft: () => null
                }}
            />
            <Stack.Screen
                name="LoggedProfile"
                component={LoggedScreen}
                options={{
                    title: 'User Profile',
                    headerShown: false,
                    headerLeft: () => null
                }}
            />
        </Stack.Navigator>
    );
}
