import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen } from '../screens/Home';
import { HomeTabParamList } from '../types';


const BottomTab = createBottomTabNavigator<HomeTabParamList>();

export default function HomeTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Chat"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="chatbox" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    color: string;
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
