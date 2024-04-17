import React, { useState,  useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable, Keyboard, Vibration} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style';

import InputType1 from '../../Components/InputType1';
import InputType2 from '../../Components/InputType2';
import InputType3 from '../../Components/InputType3';
import SelectSexo from '../../Components/Select';



export default function Registration ({route}) {
    [localData, setLocalData] = useState([]);
    useEffect(() => {
        if (route.params) {
            const { dados, setDados } = route.params;
            console.log('Dados recebidos:', dados);
        }else{
            console.log('dados não recebidos')
            fetchLocal()
        }
      }, [route.params]);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('contatos');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (error) {
            console.error('Erro ao ler os dados da AsyncStorage:', error);
            return null;
        }
    };

    const fetchData = async () => {
        const retorno = await getData();
        setDados(retorno);
        console.log('dados do async:', retorno);
        console.log('dados do state: ', dados);
    };

    const fetchLocal = async () => {
        const retorno = await getData();
        setLocalData(retorno);
        console.log('dados da convergencia: ', localData)
    };


    [nome, setNome] = useState('');
    [numero, setNumero] = useState('');
    [email, setEmail] = useState('');
    [sexo, setSexo] = useState('');
    [ano, setAno] = useState('');

    [voidCheck, setVoidCheck] = useState(false);
    [check, setChek] = useState(false);



    function submitForm() {
        if(nome === '' || numero === '' || email === '' || sexo === '' || ano === ''){
            setVoidCheck(true);
            setChek(false);
            Vibration.vibrate();
        }else{
            setVoidCheck(false);
            setChek(true);

            const novoContato = { id: localData.length, name: nome, phone: numero, mail: email, genre: sexo, year: ano };
            const novaLista = [...localData, novoContato];

            setDados(novaLista);
            AsyncStorage.setItem('contatos', JSON.stringify(novaLista))
                .then(() => console.log('Contato salvo com sucesso!'))
                .catch(error => console.error('Erro ao salvar contato:', error));
            fetchData();
        }
    };

    const limparContatos = async () => {
        try {
          await AsyncStorage.removeItem('contatos');
          setDados([]);
          console.log('Contatos removidos com sucesso!');
        } catch (error) {
          console.error('Erro ao limpar contatos da AsyncStorage:', error);
        }
      };

    return(
        <Pressable onPress={Keyboard.dismiss}>
            <View style={styles.boxRegister}>

                <View>
                    <Text style={[styles.labelInput, {color: voidCheck ? 'red' : 'black'}]}>{voidCheck ? 'Nome*' : 'Nome'}</Text>
                    <InputType1 example='EX: Pedro Ricardo' state={nome} setState={setNome} />
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
                    <Text style={styles.textBtn}>REGISTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={limparContatos}>
                    <Text style={styles.textBtn}>LIMPAR</Text>
                </TouchableOpacity>

            </View>
        </Pressable>
    )
}