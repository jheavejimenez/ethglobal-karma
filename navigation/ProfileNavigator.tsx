import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ChatListScreen } from "../screens/Chat";
import { ProfileScreen } from "../screens/Profile";
import { ProfileParamList } from "../types";


const Stack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="UserProfile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}
