import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

export default function InputType1 ({labelName, example, state, setState}) {

    return(
        <View>
            <Text style={styles.labelInput}>{labelName}</Text>

            <TextInput
            style={styles.input}
            placeholder={example}
            selectionColor="#000000"
            onChangeText={setState}
            value={state}
            maxLength={30}
            />

            <Text style={styles.cont}>{state ? state.length : 0}/30</Text>
        </View>

    )
}