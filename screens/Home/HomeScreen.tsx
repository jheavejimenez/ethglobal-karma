import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Header } from '../../components/Home';
import { PoppinText } from '../../components/StyledText';
import { View } from '../../components/Themed';
import ViewWithLoading from '../../components/ViewWithLoading';
import { DefaultColor } from '../../constants/Colors';
import { ScrollView, StyleSheet } from 'react-native';
import useColorScheme from '../../hooks/useColorScheme';
import { HomeCarousel } from '../../components/Carousel';
import CommonHeader from '../../components/Header/CommonHeader';
import { GiverData } from '../../constants/GiverData';
import { Profile } from '../../models/Profile';
import GiverProfile from '../../components/Giver/GiverProfile';

export default function HomeScreen() {

    const profiles = GiverData();

    return (
        <ViewWithLoading loading={false}>
            <View style={{ paddingHorizontal: 20 }}>
                <Header />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.nearbyContainer}>
                        <CommonHeader
                            title='Nearby items'
                            onPress={() => { }}
                        />
                        <HomeCarousel />
                    </View>
                    <View style={styles.topGiverContainer}>
                        <CommonHeader
                            title='Top givers'
                            onPress={() => { }}
                        />
                        {profiles && profiles.map((profile: Profile) => (
                            <GiverProfile
                                key={profile.pk}
                                profile={profile}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </ViewWithLoading>
    );
}

const styles = StyleSheet.create({
    nearbyContainer: {
        flex: 0
    },
    topGiverContainer: {
        flex: 0,
        paddingVertical: 20
    }
});