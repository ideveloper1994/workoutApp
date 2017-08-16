import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import FontConstant from '../../helper/fontSize';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class UserProfile extends React.Component {

    componentDidMount(){
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={{height: null,width:null,flex: 1}} source={require('./../../resources/images/swift.jpeg')}
                       resizeMode='cover'/>
                <View style={styles.mainView}>
                    <View style={styles.profileView}>
                        <Text style={styles.bioText}>BIO</Text>
                        <Text style={styles.nameText}>Jennifer Kruidbos</Text>
                        <View style={styles.lineView}/>
                        <Text style={styles.descriptionText}>As a certified Yoga Aliance instructor and CartiPro trainer, I create and oversee specialized programmes to help busy professionale boost productivity and performance through yoga and mindfulness.</Text>
                    </View>
                    <View style={styles.downArrowView}>
                        <EvilIcons name='chevron-down' size={40} style={styles.downArrow}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    mainView: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        justifyContent:'flex-end',
    },
    buttonView: {
        left: 0,
        right: 0,
        position: 'absolute',
        backgroundColor: 'black',
        height:50,
        alignSelf: 'center'
    },
    profileView: {
        backgroundColor: 'white',
        margin: 20,
        marginBottom: 0,
        padding:25,
        alignItems: 'center',
        borderRadius: 3
    },
    lineView: {
        height: 1.5,
        width: 15,
        margin: 10,
        backgroundColor: '#EAA24C'
    },
    bioText: {
        fontWeight: '700',
        fontSize: FontConstant.XSMALL,
        textAlign:'center',
        color: '#EAA24C'
    },
    nameText: {
        fontSize: FontConstant.LARGE,
        paddingTop:5,
        textAlign:'center',
        color: '#444444'
    },
    descriptionText: {
        fontSize: FontConstant.SMALL,
        textAlign:'center',
        color: '#444444'
    },
    downArrowView: {
        margin: 20,
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    downArrow: {
        color: 'white'
    },
});