import * as React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './SlideEntry';
import { PostData } from '../../constants/PostData';
import { itemWidth, sliderWidth } from './SliderEntry_Style';

const { width: screenWidth } = Dimensions.get('window');


export default function HomeCarousel() {
    const data = PostData();

    const _renderItem = ({ item, index }, parallaxProps: any) => {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallaxProps={parallaxProps}
                parallax={true}
            />
        );
    }

    return (
        <View style={styles.container}>
            <Carousel
                layout='default'
                data={data}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                hasParallaxImages={true}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.7}
                // inactiveSlideShift={20}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={3000}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        width: '100%',
    },
    slider: {
        marginTop: 5,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingTop: 5, // for custom animation
        paddingBottom: 10
    },
});
