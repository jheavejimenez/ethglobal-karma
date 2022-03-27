import * as ImageManipulator from "expo-image-manipulator";


export const resize = async (uri: string) => {
    try {
        return await ImageManipulator.manipulateAsync(
            uri,
            [{ resize: { width: 512, height: 384 } }],
            { base64: true }
        );
    } catch (e) {
        console.log(e);
    }
}