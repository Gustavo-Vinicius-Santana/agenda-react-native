import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default function Information({ route }){

    return(
        <View>
            <Text style={styles.titulo}> TELA DE INFORMAÇÕES</Text>

            <View>
                <Text>NOME: {route.params?.nome}</Text>
                <Text>SEXO: {route.params?.sexo}</Text>
                <Text>IDADE: {route.params?.idade}</Text>
                <Text>TELEFONE: {route.params?.telefone}</Text>
                <Text>E-MAIL: {route.params?.email}</Text>
            </View>
        </View>
    )
}