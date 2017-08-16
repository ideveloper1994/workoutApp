
import React, { Component } from 'react';
import { ActivityIndicator,
    View, Image }
    from 'react-native';
import Constant from '../helper/constant'

export default class Loader extends Component{

    render(){
        return( (this.props.visible) ?
                    <View style={{ position:'absolute', backgroundColor: 'rgba(0,0,0,0.5)',
                    height: Constant.screenHeight, width:Constant.screenWidth,
                    alignItems:'center', justifyContent:'center'}}>
                        <ActivityIndicator
                            animating={true}
                            size="large"
                            color={'#FFF'}
                        />
                    </View>
                : null
        );
    }
}

