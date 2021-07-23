import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native';

class App extends Component{

    constructor(props){
        super(props)
        this.state = { eu: '', ec: '', res: '' }
    }

    jokempo(escolhaUsuario){

        let numAle = Math.floor(Math.random() * 3)
        let escolhaComputador = ''
        let resultado = ''

        switch(numAle){
            case 0: escolhaComputador = 'pedra'
            break

            case 1: escolhaComputador = 'papel'
            break

            case 2: escolhaComputador = 'tesoura'
            break
        }

        if(escolhaComputador === 'pedra'){

            if(escolhaUsuario === 'pedra'){
                resultado = 'Empate'
            }

            if(escolhaUsuario === 'papel'){
                resultado = 'Ganhou'
            }

            if(escolhaUsuario === 'tesoura'){
                resultado = 'Perdeu'
            }
        }

        if(escolhaComputador === 'papel'){

            if(escolhaUsuario === 'papel'){
                resultado = 'Empate'
            }

            if(escolhaUsuario === 'tesoura'){
                resultado = 'Ganhou'
            }
            
            if(escolhaUsuario === 'pedra'){
                resultado = 'Perdeu'
            }
        }

        if(escolhaComputador === 'tesoura'){

            if(escolhaUsuario === 'tesoura'){
                resultado = 'Empate'
            }

            if(escolhaUsuario === 'pedra'){
                resultado = 'Ganhou'
            }
            
            if(escolhaUsuario === 'papel'){
                resultado = 'Perdeu'
            }
        }

        this.setState({ 
            eu: escolhaUsuario,
            ec: escolhaComputador, 
            res: resultado
        })
    }

    render(){
        return(
            <View>
                <Topo></Topo>

                <View style={styles.palco}>
                    <Text style={styles.txtRes}>{this.state.res}</Text>
                    <Icone escolha={this.state.ec} jogador='Smartphone'></Icone>
                    <Icone escolha={this.state.eu} jogador='Usuário'></Icone>
                </View>  

                <View style={styles.acoes}>
                    <View style={styles.btn}>
                        <Button title='Pedra' onPress={() => this.jokempo('pedra')} />
                    </View>
                    <View style={styles.btn}>
                        <Button title='Papel' onPress={() => this.jokempo('papel')} />
                    </View>
                    <View style={styles.btn}>
                        <Button title='Tesolra' onPress={() => this.jokempo('tesoura')} />
                    </View>
                </View>
                
            </View>
        )
    }
}

class Topo extends Component{
    render(){
        return(
            <View>
                <Image source={require('./imgs/jokenpo.png')} />
            </View>
        )
    }
}

class Icone extends Component{
    render(){
        if(this.props.escolha === 'pedra'){
            return(
                <View style={styles.ico}>
                    <Image source={require('./imgs/pedra.png')} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        }

        if(this.props.escolha === 'papel'){
            return(
                <View style={styles.ico}>
                    <Image source={require('./imgs/papel.png')} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        }

        if(this.props.escolha === 'tesoura'){
            return(
                <View style={styles.ico}>
                    <Image source={require('./imgs/tesoura.png')} />
                    <Text style={styles.txtJog}>{this.props.jogador}</Text>
                </View>
            )
        } else {
            return false
        }
    }
}

const styles = StyleSheet.create({
    btn:{
        width: 90
    },

    acoes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    palco:{
        alignItems: 'center',
        height: 300,
        margin: 20
    },

    txtRes:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'blue',
        height: 60
    },

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

export default App;