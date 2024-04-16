import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './style'

export default function Contacts ({navigation}){

    return(
        <View style={styles.boxContatos}>
            <View style={styles.boxItem}>
                <Text style={styles.infoLabel}>NOME: <Text style={styles.info}>Pedro</Text> </Text>
                <Text style={styles.infoLabel}>NUMERO: <Text style={styles.info}>83 98808-2293</Text> </Text>

                <View style={styles.boxClickInfo}>
                    <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                    {
                        nome: 'pedro silvestre',
                        sexo: 'masculino',
                        idade: '18',
                        telefone: '83 98808-2293',
                        email: 'pedro@gmail.com'
                    }
                    )}> INFORMAÇÕES </Text>
                </View>
            </View>

            <View style={styles.boxItem}>
                <Text style={styles.infoLabel}>NOME: <Text style={styles.info}>maria tereza</Text> </Text>
                <Text style={styles.infoLabel}>NUMERO: <Text style={styles.info}>83 4002-8922</Text> </Text>

                <View style={styles.boxClickInfo}>
                    <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                    {
                        nome: 'maria tereza',
                        sexo: 'feminino',
                        idade: '25',
                        telefone: '83 4002-8922',
                        email: 'maria@gmail.com'
                    }
                    )}> INFORMAÇÕES </Text>
                </View>
            </View>

            <View style={styles.boxItem}>
                <Text style={styles.infoLabel}>NOME: <Text style={styles.info}>Guilherme Ricardo</Text> </Text>
                <Text style={styles.infoLabel}>NUMERO: <Text style={styles.info}>83 98508-9994</Text> </Text>

                <View style={styles.boxClickInfo}>
                    <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Guilherme Ricardo',
                        sexo: 'masculino',
                        idade: '21',
                        telefone: '83 98508-9994',
                        email: 'gui@gmail.com'
                    }
                    )}> INFORMAÇÕES </Text>
                </View>
            </View>

        </View>

    )
}