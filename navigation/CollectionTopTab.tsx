import * as React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CollectionTopTabParamList } from "../types";
import CollectionItem from "../components/Collection/CollectionItem";
import CollectionHistory from "../components/Collection/CollectionHistory";
import { View } from "../components/Themed";

const Tab = createMaterialTopTabNavigator<CollectionTopTabParamList>();

export default function CollectionTopTab() {
    return (
        <View style={{ flexGrow: 1 }}>
            <Tab.Navigator
                initialRouteName="ItemList"
                screenOptions={{
                    tabBarLabelStyle: {
                        fontFamily: 'poppins-semibold',
                        fontSize: 15,
                        textTransform: 'none'
                    }
                }}
                style={{
                    flexGrow: 1
                }}
            >
                <Tab.Screen
                    name="ItemList"
                    component={CollectionItem}
                    options={{
                        title: 'Items'
                    }}
                />
                <Tab.Screen
                    name="HistoryList"
                    component={CollectionHistory}
                    options={{
                        title: 'History'
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}