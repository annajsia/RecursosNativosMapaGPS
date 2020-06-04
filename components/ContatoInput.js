import React,{useState} from 'react';
import {View,Text,TextInput,Button, StyleSheet} from 'react-native';

const ContatoInput = (props) => {
    const[contato,setContato] = useState('');
    const capturarContato = (contato) => {
        setContato(contato);
    }
    const[telefone, setTelefone] = useState('');
    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }
    return (
    
    <View style={styles.contatoView}>
    {/* usuaario ira inserir contatos aqui*/}
    <Text style={{alignItems:'center',marginLeft:80,fontSize:16}}>Novo Contato</Text>
    <TextInput 
    
    placeholder="Nome" 
    style={styles.ContatoInputText} 
    onChangeText={capturarContato}
    value={contato}/>

    <TextInput
    
    placeholder="Numero de Telefone"
    style={styles.ContatoInputText} 
    onChangeText={capturarTelefone}
    value={telefone}/>
    
    
    <Button  title="Adicionar Contato" color="#4876FF"
    onPress={() => props.onAdicionarContato(contato,telefone)}
    
    /> 
    </View> 
//a () => ajuda a nao rodar a funcao no momento do carregamento da pagina
    )
}

const styles = StyleSheet.create({
    
    ContatoInputText:{
     marginBottom:25,
     marginTop:8
    },
    contatoView:{
        padding:2,
        marginBottom:5,

      }  ,
    itemNaLista:{
        padding: 12,
        backgroundColor: '#CCC',
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:40,
        borderRadius: 8
    }
})

export default ContatoInput;