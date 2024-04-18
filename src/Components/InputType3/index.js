import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, Platform, Text} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';

export default function InputType3({state, setState}){
  const formatDate = (rawDate) => {
    const date = new Date(rawDate);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${day}/${month}/${year}`;
  };

  const [showPicker, setShowPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [idade, setIdade] = useState('')
  const today =(new Date());

  const toggleDatePicker = () => {
    setShowPicker((prev) => !prev);
  };

  const onChangeDate = (event, selectedDate) => {
    if (event.type === 'set') {
      setSelectedDate(selectedDate);

      if (Platform.OS === 'android') {
        toggleDatePicker();
        setState(formatDate(selectedDate));
      }
    } else {
      toggleDatePicker();
    }
  };

    useEffect(() => {
        if (state) {
        function calcularIdade(dataNascimentoStr) {
            const partesData = state.split('/');
            const dia = parseInt(partesData[0], 10);
            const mes = parseInt(partesData[1], 10) - 1;
            const ano = parseInt(partesData[2], 10);
            const dataNascimento = new Date(ano, mes, dia);

            const dataAtual = new Date();
            const diferencaEmMilissegundos = dataAtual.getTime() - dataNascimento.getTime();
            const diferencaEmAnos = diferencaEmMilissegundos / (1000 * 60 * 60 * 24 * 365.25);

            const idade = Math.floor(diferencaEmAnos);
            return idade;
        }

        const idadeCalculada = calcularIdade(state);
        setIdade(idadeCalculada);
        } else {
        setIdade('');
        }
    }, [state]);


  return (
    <View>
      {showPicker && (
        <DateTimePicker
          mode="date"
          display="spinner"
          value={selectedDate}
          onChange={onChangeDate}
           maximumDate={today}
        />
      )}

      {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            value={state}
            editable={false}
          />
        </Pressable>
      )}

        <View>
            <Text style={styles.textCentro}>IDADE</Text>
            <Text style={styles.textCentro}>{idade}</Text>
        </View>
    </View>
  );
};