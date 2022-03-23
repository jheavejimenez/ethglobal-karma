import * as React from 'react';
import { Header } from '../../components/Home';
import { View } from '../../components/Themed';
import ViewWithLoading from '../../components/ViewWithLoading';
import { Platform, ScrollView, StyleSheet } from 'react-native';
import { HomeCarousel } from '../../components/Carousel';
import CommonHeader from '../../components/Header/CommonHeader';
import { GiverData } from '../../constants/GiverData';
import { Profile } from '../../models/Profile';
import GiverProfile from '../../components/Giver/GiverProfile';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    const profiles = GiverData();

    return (
        <ViewWithLoading loading={false}>
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
                <Header />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, marginBottom: 30 }}
                    showsVerticalScrollIndicator={false}
                    style={{ height: '100%' }}
                >
                    <View style={styles.nearbyContainer}>
                        <CommonHeader
                            title='Nearby items'
                            onPress={() => {
                                navigation.navigate("ItemList");
                            }}
                        />
                        <HomeCarousel />
                    </View>
                    <View style={styles.topGiverContainer}>
                        <CommonHeader
                            title='Top givers'
                            onPress={() => { }}
                        />
                        {profiles && profiles.map((profile: Profile, index: number) => (
                            <GiverProfile
                                key={index}
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
        paddingVertical: 20,
    }
});