import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Constant from '../../helper/constant';
import FontSize from '../../helper/fontSize';
import TopComponent from '../components/topComponent';
import BottomComponent from '../components/bottomComponent';
import CenterComponent from '../components/centerComponent';

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

    onCenterBtnClicked = () => {

    };

    onRightButtonClicked = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <TopComponent/>

                <View style={{ flex:1, justifyContent: 'center'}}>
                    <CenterComponent
                        isLeft={false}
                        leftTitle = ""
                        isCenter = {true}
                        onCenterBtnClicked = {this.onCenterBtnClicked}
                        isRight={true}
                        rightTitle = "PROFILE"
                        onRightButtonClicked = {this.onRightButtonClicked}
                    />
                </View>
                <View style={{ justifyContent: 'flex-end'}}>
                    <BottomComponent/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(36,20,12,0.9)',
    },
});