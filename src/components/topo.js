import React, { Component } from 'react'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

const imgTopo = require('../imgs/jokenpo.png')

class Topo extends Component {
    render () {
        return (
            <View style={styles.alinhamento}>
                <Image source={(imgTopo)} />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    
    alinhamento: {
        alignItems: 'center',
        paddingTop: 10
    }
})

export default Topo