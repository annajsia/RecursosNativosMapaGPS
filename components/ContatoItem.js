import React,{useState} from 'react';
import {View,TextInput,Text,Button, StyleSheet, TouchableOpacity} from 'react-native'
 
const ContatoItem = (props)=> {
    return (
        <TouchableOpacity 
        onPress={props.onDelete.bind(this, props.chave, props.chave2)}>
        <View style = { styles.itemNaLista}>
        <View style = { styles.Titulo}>
        <View style = { styles.Inicial}>
        <Text style ={{color:'#FFFAFA', fontSize:18, marginLeft:16}}> 
            {props.contato.substring(0,1)}
        </Text>
        </View>
        <Text style ={{color:'#FFFBFA', fontSize:18, textAlign:"center"}}> 
       
        {props.contato}
          </Text>
        </View>
        <Text style={{color:'#000',fontSize:10}}>  Celular</Text>
        <Text  style = { styles.Nome}
        
        >
          {props.telefone} </Text>
        
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    itemNaLista:{
        paddingTop: 20,
        paddingBottom:20,
        padding: 12,
        backgroundColor: 'white',
        borderBottomColor: '#000',
        borderWidth: 1,
        marginBottom:10,
        borderRadius: 3
    },
    Titulo:{
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#CD5C5C',
        marginLeft:-12,
        marginRight:-12,
        marginTop:-20,
        marginBottom:10,        
        borderRadius: 5
       
    },
    Inicial:{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#363636',
        marginLeft:120,
        marginRight:110,
        marginTop:2,
        marginBottom:10,        
        borderRadius: 60
       
    },
    Nome:{
        paddingTop:6,
        fontSize:16,
        color:'#000',
        marginLeft:4
    }
});

export default ContatoItem;