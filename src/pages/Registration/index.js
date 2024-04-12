import React, { useState,  useEffect } from 'react';
import { View, Text, TouchableOpacity, Pressable, Keyboard, Vibration} from 'react-native';

import styles from './style';

import InputType1 from '../../Components/InputType1';
import InputType2 from '../../Components/InputType2';
import InputType3 from '../../Components/InputType3';
import SelectSexo from '../../Components/Select';



export default function Registration () {
    [nome, setNome] = useState('');
    [numero, setNumero] = useState('');
    [email, setEmail] = useState('');
    [sexo, setSexo] = useState('');
    [ano, setAno] = useState('');
    [dados, setDados] = useState([]);

    [voidCheck, setVoidCheck] = useState(false);
    [check, setChek] = useState(false);

    useEffect(() => {
        console.log(dados);
    }, [dados]);

    function submitForm() {
        if(nome === '' || numero === '' || email === '' || sexo === '' || ano === ''){
            setVoidCheck(true);
            setChek(false);
            Vibration.vibrate();
        }else{
            setVoidCheck(false);
            setChek(true);
            setDados((arr) => [...arr, { id: dados.length, name: nome, phone: numero, mail: email, genre: sexo, year: ano }]);

            setNome('');
            setNumero('');
            setEmail('');
            setSexo('');
            setAno('');
        }
    };


    return(
        <Pressable onPress={Keyboard.dismiss}>
            <Text style={styles.titulo}>TELA DE REGISTRO</Text>

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