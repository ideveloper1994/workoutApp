import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/config';
import navigationContext from './navigationHelper/customNavigationContext';
import Router from './navigationHelper/router'
import { NavigationProvider,StackNavigation } from '@expo/ex-navigation';

export default class main extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Provider store={store}>
                    <NavigationProvider router={Router} context={navigationContext}>
                        <StatusBar
                            hidden={true}
                        />
                        <StackNavigation initialRoute={Router.getRoute('homePage')}
                                         defaultRouteConfig={{
                                             navigationBar: {
                                                 visible: false,
                                             }
                                         }}/>
                    </NavigationProvider>
                </Provider>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});