import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Header } from '../../components/Home';
import { PoppinText } from '../../components/StyledText';
import { View } from '../../components/Themed';
import ViewWithLoading from '../../components/ViewWithLoading';
import { DefaultColor } from '../../constants/Colors';
import { StyleSheet } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import { HomeCarousel } from '../../components/Carousel';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.darken : DefaultColor.white;

    return (
        <ViewWithLoading loading={false}>
            <View style={{ paddingHorizontal: 20 }}>
                <Header />
                <View style={styles.nearbyContainer}>
                    <View style={styles.titleContainer}>
                        <PoppinText style={{
                            fontFamily: 'poppins-semibold',
                            fontSize: 18
                        }}>
                            Nearby items
                        </PoppinText>
                        <Ionicons name='arrow-forward-circle-outline' size={24} color={themeColor} />
                    </View>
                    <HomeCarousel />
                </View>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    nearbyContainer: {
        flex: 0
    }
});