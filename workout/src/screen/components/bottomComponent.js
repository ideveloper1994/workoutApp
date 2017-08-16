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

export default  class BottomComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{ padding: 15, flexDirection:'row' }}>
                <View style={{ flex:1, justifyContent: 'center',
                    alignItems: 'flex-start',
                    }}>
                    <View style={{

                    borderRadius: 15,
                    borderColor: '#FFF', borderWidth: 1, padding:5, paddingLeft:10, paddingRight: 10 }}>
                        <Text style={styles.text}>LEARN MORE</Text>
                    </View>

                </View>
                <View style={{ flex:1,
                justifyContent: 'center',
                alignItems: 'flex-end' }}>
                    <MaterialCommunityIcons name='message-reply-text'
                                            size={22}
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
        fontSize: FontConstant.SMALL,
        fontWeight: '500',
        backgroundColor: Constant.transparent
    }

});