import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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

    return(
        <View>
            <Text style={styles.titulo}>TELA DE REGISTRO</Text>

            <View style={styles.boxRegister}>
                <InputType1 labelName='Nome' example='EX: Pedro Ricardo' state={nome} setState={setNome} />

                <InputType2 state={numero} setState={setNumero}/>

                <InputType1 labelName='Email' example='EX: gugu@gmail.com' state={email} setState={setEmail}/>

                <SelectSexo state={sexo} setState={setSexo}/>

                <InputType3 state={ano} setState={setAno}/>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>REGISTRAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}