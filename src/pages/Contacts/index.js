import React, { useState,  useEffect } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './style'

export default function Contacts ({navigation, route}){
    [localData, setLocalData] = useState([]);
    useEffect(() => {
        if (route.params) {
            const { dados, setDados} = route.params;
            setLocalData(dados);
            console.log('Dados recebidos:', dados);
        }else{
            console.log('dados não recebidos.')
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

    const fetchLocal = async () => {
        const retorno = await getData();
        setLocalData(retorno);
        console.log('dados da tela de contatos: ', localData)
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
            ))
            }




        </View>

    )
}