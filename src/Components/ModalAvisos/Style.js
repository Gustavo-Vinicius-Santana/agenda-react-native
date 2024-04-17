import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    viewModal:{
        flex: 1,
        paddingTop: 43,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },viewContentModal:{
        width: "75%",
        backgroundColor: 'white',
        paddingHorizontal:10,
        paddingTop: 5,
        paddingBottom: 30,
        borderRadius: 10
    },
    boxClose:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    aviso: {
        fontSize:20,
        fontWeight: "bold",
        textAlign: "center",
    }
})

export default Styles;