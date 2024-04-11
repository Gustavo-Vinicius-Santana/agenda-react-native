import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

export default function InputType1 ({labelName, example}) {

    [valor, setValor] = useState('');
    const limit = 30

    return(
        <View>
            <Text style={styles.labelInput}>{labelName}</Text>

            <TextInput
            style={styles.input}
            placeholder={example}
            selectionColor="#000000"
            onChangeText={setValor}
            value={valor}
            maxLength={limit}
            />

            <Text style={styles.cont}>{valor.length}/30</Text>
        </View>

    )
}