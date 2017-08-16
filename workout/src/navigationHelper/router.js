import {
    createRouter,
} from '@expo/ex-navigation';
import homePage from '../screen/home/homePage';
import profilePage from '../screen/profile/userProfile';
import demo from '../screen/home/demo';

export default createRouter(() => ({
    homePage: () => homePage,
    profilePage: () => profilePage,
    demo: () => demo,
}),{ignoreSerializableWarnings: true});
