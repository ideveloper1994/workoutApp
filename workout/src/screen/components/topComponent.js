import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';
import Constant from '../../helper/constant';
import FontConstant from '../../helper/fontSize';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default  class TopComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{ padding: 15, flexDirection:'row'}}>
                <View style={{ flex:1 }}>
                    <Image source={require("../../resources/images/logo.png")}
                           style={{height:Constant.screenWidth*0.14, width: Constant.screenWidth*0.3}}
                           resizeMode="stretch"
                    />
                </View>
                <View style={{ flex:1,
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center' ,
                backgroundColor: Constant.transparent}}>
                    <Text style={styles.text}>SHARE</Text>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.3)',
                    height: 30, width: 30,
                     borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                        <Entypo name='share'
                                size={20}
                                color="#FFF"
                        style={{backgroundColor: Constant.transparent}}/>
                    </View>

                    <FontAwesome name='heart'
                                 size={20}
                                 color={(this.props.isLiked) ? "#FF0000" : "#FFF"}
                                 style={{backgroundColor: Constant.transparent}}
                                 onPress={() => this.props.heartPressed()}/>

                    <MaterialCommunityIcons name='window-close'
                                            size={25}
                                            color="#FFF"
                                            style={{backgroundColor: Constant.transparent}}/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color: '#FFF',
        fontSize: FontConstant.XSMALL,
        fontWeight: '600',
        backgroundColor: Constant.transparent
    }

});