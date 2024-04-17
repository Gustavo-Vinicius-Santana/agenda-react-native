import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxContatos:{
        width: '100%',
        alignItems:"center",
    },boxItem:{
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 25,
        width: '60%',
        borderWidth: 1,
    },infoLabel:{
        fontSize:16,
        fontWeight:'bold',
    },info:{
        fontSize:16,
        fontWeight:'normal',
    },
    boxClickInfo:{
        alignItems: 'center',
        marginTop:15,
    },
    clickInfo:{
        textAlign:'center',
        fontSize: 15,
        fontWeight: "bold",
        padding:5,
        width: '75%',
        borderRadius: 50,
        backgroundColor: 'black',
        color: "white",
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