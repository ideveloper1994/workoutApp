import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import Constant from '../../helper/constant';
import FontConstant from '../../helper/fontSize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default  class CenterComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{ padding: 5, flexDirection:'row' }}>


                { (this.props.isLeft)
                    ?
                    <TouchableHighlight style={{ flex:1, justifyContent: 'center',
                    alignItems: 'flex-start',
                    }} onPress={() => this.props.onLeftButtonClicked()} underlayColor={Constant.transparent}>
                        <View style={{flexDirection:'row', justifyContent: 'center',
                    alignItems: 'center',}}>

                            <MaterialIcons name='navigate-before'
                                           size={32}
                                           color="#FFF"/>
                            <Text style={styles.text}>{this.props.leftTitle}</Text>
                        </View>
                    </TouchableHighlight>
                    :
                    <View style={{ flex:1, justifyContent: 'center',
                    alignItems: 'center',
                    }}/>
                }



                { (this.props.isCenter)
                    ?
                    <TouchableHighlight style={{ flex:1, justifyContent: 'center',
                    alignItems: 'center',
                    }} onPress={() => this.props.onCenterBtnClicked()} underlayColor={Constant.transparent}>
                        <MaterialIcons name='play-circle-outline'
                                       size={100}
                                       color="#FFF"/>
                    </TouchableHighlight>
                    :
                    <View style={{ flex:1, justifyContent: 'center',
                    alignItems: 'center',
                    }}/>
                }


                { (this.props.isRight)
                    ?
                    <TouchableHighlight style={{ flex:1, justifyContent: 'center',
                    alignItems: 'flex-end',
                    }} onPress={() => this.props.onRightButtonClicked()} underlayColor={Constant.transparent}>
                        <View style={{flexDirection:'row', justifyContent: 'center',
                    alignItems: 'center',}}>
                            <Text style={styles.text}>{this.props.rightTitle}</Text>
                            <MaterialIcons name='navigate-next'
                                           size={32}
                                           color="#FFF"/>
                        </View>
                    </TouchableHighlight>
                    :
                    <View style={{ flex:1, justifyContent: 'center',
                    alignItems: 'center',
                    }}/>
                }


            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        color: '#FFF',
        fontSize: FontConstant.SMALL,
        fontWeight: '500'
    }

});