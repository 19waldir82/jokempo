import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

class Icone extends Component{
    render(){
        if(this.props.escolha === 'pedra'){
            return(
                <View style={styles.ico}>
                    <Image source={require('../imgs/pedra.png')} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        }

        if(this.props.escolha === 'papel'){
            return(
                <View style={styles.ico}>
                    <Image source={require('../imgs/papel.png')} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        }

        if(this.props.escolha === 'tesoura'){
            return(
                <View style={styles.ico}>
                    <Image source={require('../imgs/tesoura.png')} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        } else {
            return false
        }
    }
}

const styles = StyleSheet.create({

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