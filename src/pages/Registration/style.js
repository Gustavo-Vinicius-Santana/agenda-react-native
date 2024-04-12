import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titulo:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    boxRegister:{
        marginTop: 15,
        width:'100%',
        alignItems:'center',
    },
    labelInput: {
        fontSize: 14,
        marginBottom:5
    },
    labelInputSelect:{
        fontSize: 14,
        marginBottom:5,
        textAlign: 'center',
    },
    btn:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        padding: 5,
        marginTop: 15,
        backgroundColor: 'black'

    },
    textBtn:{
        fontSize: 20,
        color:"white",
    }
})

export default styles