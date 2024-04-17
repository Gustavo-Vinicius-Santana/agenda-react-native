import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable, Keyboard, Vibration } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style';

import InputType1 from '../../Components/InputType1';
import InputType2 from '../../Components/InputType2';
import InputType3 from '../../Components/InputType3';
import SelectSexo from '../../Components/Select';

export default function Information({ route }){
    [nome, setNome] = useState(route.params?.nome);
    [numero, setNumero] = useState(route.params?.telefone);
    [email, setEmail] = useState(route.params?.email);
    [sexo, setSexo] = useState(route.params?.sexo);
    [ano, setAno] = useState(route.params?.idade);
    [idUser, setIdUser] = useState(route.params?.id);

    [voidCheck, setVoidCheck] = useState(false);
    [check, setChek] = useState(false);

    const atualizarContato = async () => {
        try {
          const contatosString = await AsyncStorage.getItem('contatos');
            let contatos = JSON.parse(contatosString);
            contatos[idUser] = {
                id: idUser,
                name: nome,
                phone: numero,
                mail: email,
                genre: sexo,
                year: ano
              };
            await AsyncStorage.setItem('contatos', JSON.stringify(contatos));
            console.log('Contato atualizado com sucesso!');
            console.log('dado mudado: ', contatos)

        }catch (error) {
            console.error('Erro ao atualizar contato:', error);
        }
    };

    function submitForm() {
        if(nome === '' || numero === '' || email === '' || sexo === '' || ano === ''){
            setVoidCheck(true);
            setChek(false);
            Vibration.vibrate();
        }else{
            setVoidCheck(false);
            setChek(true);
            atualizarContato();
        }
    };
    const getAsync = async () => {
        try {
          const contatosString = await AsyncStorage.getItem('contatos');
            let contatos = JSON.parse(contatosString);
            console.log('dado do Async: ', contatos)

        }catch (error) {
            console.error('Erro ao atualizar contato:', error);
        }
    };

    function mostrar(){
        getAsync();

    }

    return(
        <Pressable onPress={Keyboard.dismiss}>

            <View style={styles.boxMain}>
                <Text style={styles.titulo}> TELA DE INFORMAÇÕES</Text>

                <View>
                    <Text style={[styles.labelInput, {color: voidCheck ? 'red' : 'black'}]}>{voidCheck ? 'Nome*' : 'Nome'}</Text>
                    <InputType1 example='EX: Pedro Ricardo' state={nome} setState={setNome}/>
                </View>

                <View>
                    <Text style={[styles.labelInput, {color: voidCheck ? 'red' : 'black'}]}>{voidCheck ? 'Numero*' : 'Numero'}</Text>
                    <InputType2 state={numero} setState={setNumero}/>
                </View>

                <View>
                    <Text style={[styles.labelInput, {color: voidCheck ? 'red' : 'black'}]}>{voidCheck ? 'Email*' : 'Email'}</Text>
                    <InputType1 example='EX: gugu@gmail.com' state={email} setState={setEmail}/>
                </View>

                <View>
                    <Text style={[styles.labelInputSelect, {color: voidCheck ? 'red' : 'black'}]}>{voidCheck ? 'Sexo*' : 'Sexo'}</Text>
                    <SelectSexo state={sexo} setState={setSexo}/>
                </View>

                <View>
                    <Text style={[styles.labelInput, {color: voidCheck ? 'red' : 'black'}]}>{voidCheck ? 'Ano de nascimento*' : 'Ano de nascimento'}</Text>
                    <InputType3 state={ano} setState={setAno}/>
                </View>

                <TouchableOpacity style={styles.btn} onPress={submitForm}>
                    <Text style={styles.textBtn}>SALVAR ALTERAÇÕES</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={mostrar}>
                    <Text style={styles.textBtn}>MOSTRAR NO ASYNC</Text>
                </TouchableOpacity>

            </View>
        </Pressable>
    )
}