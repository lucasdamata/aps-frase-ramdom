import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      img: 'https://www.belasmensagens.com.br/wp-content/uploads/2018/08/que-o-dia-comece-bem.jpg',
      frase: 'Clique para gerar novas frases'
    }
    this.frases=[
      {frase: 'Levanta, sacode a poeira, dá a volta por cima.', url: 'https://cdn.pensador.com/img/imagens/pa/ul/paulo_vanzolini_levanta_sacode_a_poeira_da_volta_por_cima_1.jpg' },
      {frase: 'Nem todos os dias são bons, mas há algo bom em cada dia.', url: 'https://cdn.pensador.com/img/imagens/ne/mt/nem_todos_os_dias_sao_bons_mas_ha_algo_bom.jpg'},
      {frase: 'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.', url: 'https://cdn.pensador.com/img/imagens/ma/rt/martin_luther_king_suba_primeiro_degrau_com_fe.jpg'},
      {frase: 'Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!', url: 'https://cdn.pensador.com/img/imagens/to/da/toda_manha_voce_tem_duas_escolhas_continuar_dormindo.jpg'},
      {frase: 'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.', url: 'https://cdn.pensador.com/img/imagens/fr/as/frases_positivas_para_o_dia_2_0.jpg'}
    ]
    this.enviar = this.enviar.bind(this)
  }

  enviar(){
    const positionArray = Math.floor(Math.random()*5)
    const positionImg = this.frases[positionArray].url
    const positionfrase = this.frases[positionArray].frase
    this.setState({img: positionImg})
    this.setState({frase: positionfrase})
  }


  render(){
    
    return(
      <View style={styles.container}>
       <Image 
          source={{uri: this.state.img}}
          style= {{width: 300, height: 300, marginVertical:20}}
      />
       <Text style={styles.texto}>{this.state.frase}</Text>
        <Button
          title='Nova frase'
          onPress={this.enviar}
        />
       
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
    margin: 5
  },
  texto: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5
  }
});
