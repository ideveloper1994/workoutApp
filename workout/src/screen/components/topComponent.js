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
            <View style={{ padding: 15, flexDirection:'row' }}>
                <View style={{ flex:1 }}>
                    <Image source={require("../../resources/images/logo.png")}
                           style={{height:Constant.screenWidth*0.12, width: Constant.screenWidth*0.3}}
                           resizeMode="stretch"
                    />
                </View>
                <View style={{ flex:1,
                flexDirection:'row',
                justifyContent: 'space-around',
                alignItems: 'center' }}>
                    <Text style={styles.text}>SHARE</Text>
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.3)',
                    height: 30, width: 30,
                     borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'  }}>
                        <Entypo name='share'
                                size={20}
                                color="#FFF"/>
                    </View>

                    <FontAwesome name='heart'
                                 size={20}
                                 color="#FFF"/>

                    <MaterialCommunityIcons name='window-close'
                                            size={25}
                                            color="#FFF"/>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color: '#FFF',
        fontSize: FontConstant.XSMALL,
        fontWeight: '600'
    }

});