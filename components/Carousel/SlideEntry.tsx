import * as React from 'react';
import { Text, Pressable, Image, useColorScheme } from 'react-native';
import { ParallaxImage, ParallaxImageProps } from 'react-native-snap-carousel';
import styles, { itemWidth } from './SliderEntry_Style';
import { PoppinText } from '../StyledText';
import { Post } from '../../models/Post';
import { View } from '../Themed';
import { DefaultColor } from '../../constants/Colors';

interface IProps {
    data: Post;
    even: boolean;
    parallax: boolean;
    parallaxProps: ParallaxImageProps
}

export default function SliderEntry(props: IProps) {
    const { data, parallax, parallaxProps, even } = props;
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'light' ? DefaultColor.white : DefaultColor.dark;

    const image = () => {

        return parallax ? (
            <ParallaxImage
                source={{ uri: data.image }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.image}
                    source={{ uri: data.image }}
                />
            </View>

        );
    }

    return (
        <Pressable
            style={[styles.slideInnerContainer, styles.shadow]}
            onPress={() => {

            }}
        >
            <View style={styles.imageContainer}>
                {image()}
            </View>
        </Pressable>

    );
}