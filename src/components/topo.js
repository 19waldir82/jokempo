import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

class Topo extends Component{
    render(){
        return(
            <View style={styles.alinhamento}>
                <Image source={require('../imgs/jokenpo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    alinhamento: {
        alignItems: 'center',
        paddingTop: 10
    }
})

export default Topo