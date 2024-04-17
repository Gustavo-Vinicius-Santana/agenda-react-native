import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

import styles from './style';

import RNPickerSelect from 'react-native-picker-select';


export default function SelectSexo({state, setState}) {

    return(
        <View style={styles.boxSelect}>
            <RNPickerSelect
                onValueChange={(value) => setState(value)}
                useNativeAndroidPickerStyle={false}
                style={{
                    inputIOS: styles.inputIOS,
                    inputAndroid: styles.inputAndroid,
                    placeholder: styles.placeholder,
                    headlessAndroidContainer: styles.headlessAndroidContainer,
                  }}
                placeholder={{ label: 'Escolha o sexo', value: '' }}
                items={[
                    { label: 'Masculino', value: 'masculino' },
                    { label: 'Feminino', value: 'feminino' },
                    { label: 'Outro', value: 'outro' },
                ]}
                value={state}
            />
        </View>
    )
}