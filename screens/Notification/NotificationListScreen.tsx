import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useState } from "react";
import ViewWithLoading from "../../components/ViewWithLoading";
import { ScrollView, StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import { PoppinText } from "../../components/StyledText";
import { Notification } from "../../models/Notification";
import NotificationItem from "../../components/Notification/NotificationItem";

export default function NotificationListScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    const data = [
        new Notification(
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
            "1st Title Post",
            "Lorep ipsum generate message here",
            new Date().toUTCString(),
            false,
        ),
        new Notification(
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
            "2st Title Post",
            "Lorep ipsum generate message here",
            new Date().toUTCString(),
            false,
        ),
        new Notification(
            'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
            "3st Title Post",
            "Lorep ipsum generate message here",
            new Date().toUTCString(),
            true
        ),
    ]

    return (
        <ViewWithLoading loading={loading}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {data && data.length > 0 &&
                        <View style={{ flex: 1 }}>
                            {data.map((item: Notification, index: number) => (
                                <NotificationItem
                                    key={index}
                                    notification={item}
                                    index={index}
                                />
                            ))}
                        </View>
                    }
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
    }
});