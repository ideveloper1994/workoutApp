import React from 'react';
import { StyleSheet, Text, View, Image,
    TouchableOpacity,
    TouchableHighlight, } from 'react-native';
import TopComponent from '../components/topComponent';
import BottomComponent from '../components/bottomComponent';
import CenterComponent from '../components/centerComponent';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


import Video from 'react-native-video';
import Constant from '../../helper/constant';
import Loader from '../../helper/loaderMessage';


export default class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isHeart: false,
            isLoad:true,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'contain',
            duration: 0.0,
            currentTime: 0.0,
            controls: false,
            paused: false,
            skin: 'custom',
            ignoreSilentSwitch: null,
            isBuffering: false,
            isFullScreen: true,
        };
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);
    }

    componentWillMount(){
    }

    componentDidMount(){
    }

    onSwipeLeft(gestureState) {
        this.props.navigator.push('profilePage')
    }


    onCenterBtnClicked = () => {
            this.setState({
                isFullScreen: false
            });
    };

    onRightButtonClicked = () => {
        this.props.navigator.push('profilePage')
    };
    heartPressed = () => {
        this.setState({
            isHeart: !this.state.isHeart
        })
    };


    //Video
    onCompleteVideo = () => {

    };

    onLoad(data) {
        console.log('On load fired!');
        this.setState({
            duration: data.duration,
            isLoad:false
        });
    }

    onProgress(data) {
        console.log('On progress------'+data.currentTime);
        this.setState({currentTime: data.currentTime});
    }

    onBuffer({ isBuffering }: { isBuffering: boolean }) {
        this.setState({ isBuffering });
    }

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        } else {
            return 0;
        }
    }

    renderCustomSkin() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.fullScreen} onPress={() => {this.setState({paused: !this.state.paused, isFullScreen: true})}}>
                    <Video
                        source={require("../../resources/demo.mp4")}
                        style={styles.fullScreen}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onBuffer={this.onBuffer}
                        onProgress={this.onProgress}
                        onEnd={() => this.onCompleteVideo() }
                        repeat={true}
                    />
                </TouchableOpacity>

                {
                    (!this.state.isLoad)  ?
                        <View style={styles.outerView}>
                            <Text style={{ fontSize:12,
                            color: '#FFF', padding:5,fontFamily: Constant.font500, }}>
                                { Math.floor(this.state.currentTime / 60)+':'+Math.floor(this.state.currentTime % 60) }</Text>
                            <View style={styles.progress}>
                                <View style={[styles.innerProgressCompleted, {flex: flexCompleted}]} />
                                <View style={[styles.innerProgressRemaining, {flex: flexRemaining}]} />
                            </View>
                            <Text style={{ fontSize:13, color: '#FFF', padding:5,
                             fontFamily: Constant.font500,}}>{ Math.floor(this.state.duration / 60)+':'+Math.floor(this.state.duration % 60) }
                            </Text>
                        </View>
                        : null
                }
                <Loader text="Loading..." visible={this.state.isLoad}/>
            </View>
        );
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        if(this.state.isFullScreen){
            return (

                <View style={styles.container}>
                    <GestureRecognizer
                        onSwipeLeft={(state) => this.onSwipeLeft(state)}
                        config={config}
                        style={{flex: 1}}
                    >
                        <Image source={require("../../resources/images/home.png")}
                               style={{flex:1,height:null, width:null}}
                               resizeMode="cover"
                        />
                        <View style={{ position:'absolute', flex:1, top:0, bottom: 0, left: 0, right: 0}}>

                            <TopComponent isLiked={this.state.isHeart} heartPressed={this.heartPressed}/>

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
        }else{
            return  this.renderCustomSkin();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
        left: 5,
        right: 5,
    },
    backView:{
        height:60,
        width:60,
        position:'absolute',
        top:10,
        left:10,
        paddingLeft:5,
        paddingTop:10,
        backgroundColor:Constant.transparent
    },
    outerView:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: Constant.transparent,
        height:50,
        bottom: 10,
        left: 5,
        right: 5,
        position: 'absolute'
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 2,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 5,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 5,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    skinControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ignoreSilentSwitchControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    }
});