import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Constant from '../../helper/constant';
import FontSize from '../../helper/fontSize';
import TopComponent from '../components/topComponent';

export default class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){
    }

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <TopComponent/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F00',
    },
});