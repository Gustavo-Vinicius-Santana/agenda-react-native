import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

export default function Information({ route }){

    return(
        <View style={styles.boxMain}>
            <Text style={styles.titulo}> TELA DE INFORMAÇÕES</Text>

            <View style={styles.boxInfo}>
                <Text style={styles.infoLabel}>NOME:
                    <Text style={styles.info}>{route.params?.nome}</Text>
                </Text>
                <Text style={styles.infoLabel}>SEXO:
                    <Text style={styles.info}>{route.params?.sexo}</Text>
                </Text>
                <Text style={styles.infoLabel}>IDADE:
                    <Text style={styles.info}>{route.params?.idade}</Text>
                </Text>
                <Text style={styles.infoLabel}>TELEFONE:
                    <Text style={styles.info}>{route.params?.telefone}</Text>
                </Text>
                <Text style={styles.infoLabel}>E-MAIL: <Text style={styles.info}>{route.params?.email}</Text> </Text>
            </View>
        </View>
    )
}