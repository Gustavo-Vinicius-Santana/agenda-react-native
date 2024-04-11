import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

export default function InputType3(){
    [data, setData] = useState('');

    function dataMasked(input) {
        const dataClean = input.replace(/\D/g, '');

        let dataMask = dataClean.replace(/(\d{2})(\d{0,2})(\d{0,4})/,
        function(_, day, month, year) {
            let result = '';
            if (day) result += day;
            if (month) result += (month.length >= 1 ? '/' : '') + month;
            if (year) result += (year.length >= 1 ? '/' : '') + year;
            return result;
        })

        setData(dataMask)
    }

    return(
        <View>
            <Text style={styles.labelInput}>Ano de nascimento</Text>

            <TextInput
            style={styles.input}
            placeholder='DD/MM/AAAA'
            selectionColor="#000000"
            keyboardType='numeric'
            onChangeText={dataMasked}
            value={data}
            maxLength={10}
            />
        </View>
    )
}