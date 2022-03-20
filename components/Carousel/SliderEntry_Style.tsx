import { StyleSheet, Dimensions, Platform, useColorScheme } from 'react-native';
import { DefaultColor } from '../../constants/Colors';
import { colors } from './Colors';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage: number) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
    },
    shadow: {
        shadowColor: colors.black, // IOS
        shadowOffset: { height: 6, width: 0 }, // IOS
        shadowOpacity: 0.2, // IOS
        shadowRadius: 4, //IOS
        elevation: 9, // Android
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        overflow: 'hidden'
    },
    imageContainerEven: {
        backgroundColor: colors.black
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
        borderRadius: entryBorderRadius,

    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'black'
    },
    radiusMaskEven: {
        backgroundColor: colors.black,
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 15 - entryBorderRadius,
        paddingBottom: 15,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: colors.black
    },
    title: {
        alignSelf: 'center',
        color: '#848788',
        fontSize: 18,
        fontFamily: 'poppins-semibold',
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    titleEven: {
        color: '#848788'
    },
    subtitle: {
        color: colors.gray,
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
});