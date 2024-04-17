import React, { useState,  useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Contacts ({navigation, route}){
    [localData, setLocalData] = useState([]);
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('contatos');
            return jsonValue != null ? JSON.parse(jsonValue) : [];
        } catch (error) {
            console.error('Erro ao ler os dados da AsyncStorage:', error);
            return null;
        }
    };

    const fetchLocal = async () => {
        const retorno = await getData();
        setLocalData(retorno);
        console.log('dados da tela de contatos: ', localData)
    };
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchLocal();
        });
        return unsubscribe;
    }, [navigation]);
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
        <View style={styles.boxContatos}>
            {
            localData.map(item => (

                <View style={styles.boxItem} key={item.id}>
                    <Text style={styles.infoLabel}>NOME: <Text style={styles.info}>{item.name}</Text> </Text>
                    <Text style={styles.infoLabel}>NUMERO: <Text style={styles.info}>{item.phone}</Text> </Text>

                    <View style={styles.boxClickInfo}>
                        <Text style={styles.clickInfo} onPress={() => navigation.navigate('Information',
                        {
                            id: `${item.id}`,
                            nome: `${item.name}`,
                            sexo: `${item.genre}`,
                            idade: `${item.year}`,
                            telefone: `${item.phone}`,
                            email: `${item.mail}`
                        }
                        )}> INFORMAÇÕES </Text>
                    </View>
                </View>
            ))}

            {localData.length  === 0
            ?
            (<Text></Text>)
            :
            (
            <TouchableOpacity style={styles.btn} onPress={limparContatos}>
                <Text style={styles.textBtn}>LIMPAR</Text>
            </TouchableOpacity>
            )}

        </View>

    )
}