import {
    Dimensions,
    Platform
} from 'react-native';

module.exports = {

    screen: Dimensions.get('window'),
    screenHeight:  Dimensions.get('window').height,
    screenWidth:  Dimensions.get('window').width,

    isIOS: Platform.OS === 'ios',
    isANDROID: Platform.OS === 'android',

};