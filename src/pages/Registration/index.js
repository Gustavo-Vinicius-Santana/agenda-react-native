import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

import InputType1 from '../../Components/InputType1';
import InputType2 from '../../Components/InputType2';
import InputType3 from '../../Components/InputType3';

export default function Registration () {

    return(
        <View>
            <Text style={styles.titulo}>TELA DE REGISTRO</Text>

            <View style={styles.boxRegister}>
                <InputType1 labelName='Nome' example='EX: Pedro Ricardo' />

                <InputType2 />

                <InputType1 labelName='Email' example='EX: gugu@gmail.com' />

                <View>
                    <InputType3 />
                </View>

            </View>
        </View>
    )
}