import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native';
import TopComponent from '../components/topComponent';
import BottomComponent from '../components/bottomComponent';
import CenterComponent from '../components/centerComponent';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
    onSwipeLeft(gestureState) {
        this.props.navigator.push('profilePage')
    }


    onCenterBtnClicked = () => {

    };

    onRightButtonClicked = () => {
        this.props.navigator.push('profilePage')
    };

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return (
            <View style={styles.container}>
                <GestureRecognizer
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    config={config}
                    style={{flex: 1}}
                >
                <Image source={require("../../resources/images/home.png")}
                       style={{flex:1}}
                       resizeMode="cover"
                />
                <View style={{ position:'absolute', flex:1, top:0, bottom: 0, left: 0, right: 0}}>

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
</GestureRecognizer>
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