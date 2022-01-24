import * as Font from 'expo-font';

const useFonts = async () => {
    await Font.loadAsync({
        'Poppins': require('../node_modules/@expo-google-fonts/poppins/Poppins_400Regular.ttf'),

    });
};

export default useFonts;
