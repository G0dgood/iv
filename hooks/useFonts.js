import * as Font from 'expo-font';

const useFonts = async () => {
    await Font.loadAsync({
        'Roboto': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),

    });
};

export default useFonts;
