import React, { useState } from 'react';
import { View, TextInput, Pressable, Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './style';

export default function InputType3({state, setState}){
    [date, setDate] = useState(new Date());
    [showPicker, setShowPicker] = useState(false);
    [ano, setAno] = useState('')

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    }

    const onChangeDate = ( { type }, selectedDate ) =>{
        if(type == "set"){
            const currentDate = selectedDate;
            setDate(currentDate);

            if(Platform.OS === "android"){
                toggleDatePicker();
                setAno(formatDate(currentDate))
            }
        }else{
            toggleDatePicker();
        }
    }

    const formatDate = (rawDate) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let mounth = date.getMonth() + 1;
        let day = date.getDay();

        mounth = mounth < 10 ? `0${mounth}` : mounth;
        day = day < 10 ? `0${day}` : day;

        return `${day} - ${mounth} - ${year}`;
    }


    return(
        <View>
            {showPicker && (
                <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChangeDate}
                />
            )}

            {!showPicker && (
                <Pressable onPress={toggleDatePicker}>
                    <TextInput
                    style={styles.input}
                    placeholder="DD/MM/YYYY"
                    value={ano}
                    editable={false}
                    />
                </Pressable>
            )}



        </View>
    )
}