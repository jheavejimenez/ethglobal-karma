import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Colors, { DefaultColor } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeScreen } from '../screens/Home';
import { TabParamList } from '../types';
import ChatNavigator from './ChatNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';


const BottomTab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: DefaultColor.main,
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <BottomTab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={focused ? color : themeColor} />,
                }}
            />
            <BottomTab.Screen
                name="Chat"
                component={ChatNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <TabBarIcon name="chatbox" color={focused ? color : themeColor} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color, focused }) => <TabBarIcon name="person" color={focused ? color : themeColor} />,
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
    return <Ionicons size={24} style={{ marginBottom: -3 }} {...props} />;
}
