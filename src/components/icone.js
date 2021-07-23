import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'

const imgPedra = require('../imgs/pedra.png')
const imgPapel = require('../imgs/papel.png')
const imgTesoura = require('../imgs/tesoura.png')

class Icone extends Component {
    render () {
        if (this.props.escolha === 'pedra') {
            return (
                <View style={styles.ico}>
                    <Image source={imgPedra} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        }

        if (this.props.escolha === 'papel') {
            return (
                <View style={styles.ico}>
                    <Image source={imgPapel} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        }

        if (this.props.escolha === 'tesoura') {
            return (
                <View style={styles.ico}>
                    <Image source={imgTesoura} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        } else {
            return false
        }
    }
}

const styles = StyleSheet.create ({

    ico:{
        alignItems: 'center',
        marginBottom: 20
    },

    txtJog:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green'
    }
})

export default Icone