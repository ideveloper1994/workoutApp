import {
    createRouter,
} from '@expo/ex-navigation';
import homePage from '../screen/home/homePage';
import profilePage from '../screen/profile/userProfile';

export default createRouter(() => ({
    homePage: () => homePage,
    profilePage: () => profilePage,
}),{ignoreSerializableWarnings: true});
