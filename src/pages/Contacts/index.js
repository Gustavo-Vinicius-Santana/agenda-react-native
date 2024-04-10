import React from 'react'
import { View, Text } from 'react-native'

import styles from './style'

export default function Contacts ({navigation}){

    return(
        <View style={styles.boxContatos}>
            <Text style={styles.titulo}>SEUS CONTATOS</Text>

            <View style={styles.boxItem}>
                <Text>NOME: Pedro</Text>
                <Text>NUMERO: 83 98808-2293</Text>

                <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                {
                    nome: 'pedro silvestre',
                    sexo: 'masculino',
                    idade: '18',
                    telefone: '83 98808-2293',
                    email: 'pedro@gmail.com'
                }
                )}>INFORMAÇÕES</Text>
            </View>

            <View style={styles.boxItem}>
                <Text>NOME: Maria</Text>
                <Text>NUMERO: 83 4002-8922</Text>

                <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                {
                    nome: 'maria tereza',
                    sexo: 'feminino',
                    idade: '25',
                    telefone: '83 4002-8922',
                    email: 'maria@gmail.com'
                }
                )}>INFORMAÇÕES</Text>
            </View>

            <View style={styles.boxItem}>
                <Text>NOME: Guilherme</Text>
                <Text>NUMERO: 83 98508-9994</Text>

                <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                {
                    nome: 'Guilherme Ricardo',
                    sexo: 'masculino',
                    idade: '21',
                    telefone: '83 98508-9994',
                    email: 'gui@gmail.com'
                }
                )}>INFORMAÇÕES</Text>
            </View>



        </View>

    )
}