import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default class HomePage extends React.Component {

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>hgfhfghfhgfh</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 25
    },
    rowCell: {
        width: '100%',
    },
    rowCellNameText: {
        padding: 10,
    }
});