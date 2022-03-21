import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ChatListScreen } from "../screens/Chat";
import { ChatParamList } from "../types";


const Stack = createNativeStackNavigator<ChatParamList>();

export default function ChatNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChatList" component={ChatListScreen} />
        </Stack.Navigator>
    );
}
