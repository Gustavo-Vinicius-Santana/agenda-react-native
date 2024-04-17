import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxMain:{
        marginTop: 15,
        width:'100%',
        alignItems:'center',
    },
    titulo:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:20,
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
    btnSave:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"60%",
        padding: 7,
        marginTop: 15,
        backgroundColor: 'black'
    },
    btnExclude:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"50%",
        padding: 7,
        marginTop: 15,
        backgroundColor: 'black'
    },
    textBtn:{
        fontSize: 20,
        color:"white",
    }

})

export default styles