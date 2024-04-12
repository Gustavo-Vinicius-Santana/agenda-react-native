import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxSelect:{
        width: 200,
        marginBottom: 15,
    },inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize: 16,
        textAlign: 'center',
      },
      placeholder: {
        color: 'gray',
        textAlign: 'center',
      },
      headlessAndroidContainer: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        textAlign: 'center'
      }
})

export default styles