import React, { useState,  useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable, Keyboard, Vibration} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import styles from './style';

import InputType1 from '../../Components/InputType1';
import InputType2 from '../../Components/InputType2';
import InputType3 from '../../Components/InputType3';
import SelectSexo from '../../Components/Select';



export default function Registration ({navigation, route}) {
    [localPageData, setLocalPageData] = useState([]);
    const getDataAsyncStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('contatos');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (error) {
            console.error('Erro ao ler os dados da AsyncStorage:', error);
            return null;
        }
    };

    const SyncStorage = async () => {
        const retorno = await getDataAsyncStorage();
        setLocalPageData(retorno);
        console.log('dados da convergencia: ', localPageData)
    };

    useEffect(() => {
        const loadPageActive = navigation.addListener('focus', () => {
            SyncStorage();
        });
        return loadPageActive;
    }, [navigation]);


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

            let newId = 0;
            if (localPageData.length === 0){
                newId = localPageData.length
            }else{
                let preId = localPageData[localPageData.length - 1];
                let objtId = preId.id;
                newId = objtId + 1
            }

            const novoContato = { id: newId, name: nome, phone: numero, mail: email, genre: sexo, year: ano };
            const novaLista = [...localPageData, novoContato];

            setLocalPageData(novaLista);
            AsyncStorage.setItem('contatos', JSON.stringify(novaLista))
                .then(() => console.log('Contato salvo com sucesso!'))
                .catch(error => console.error('Erro ao salvar contato:', error));
            SyncStorage();
            setNome('');
            setNumero('');
            setEmail('');
            setSexo('');
            setAno('');
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

            </View>
        </Pressable>
    )
}