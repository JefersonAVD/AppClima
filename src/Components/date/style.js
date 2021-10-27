import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    Container:{
        borderWidth:2,
        justifyContent:'center',
        borderRadius:20,
        padding:10,
    },
    subContainer:{
        flexDirection:'row',
    },
    text:{
        fontSize:18,
        color:'white',
        
    },
    textGroup:{
        flexDirection:'row',
        alignItems: 'center',
    },
    textBox:{
        backgroundColor:'#BBC',
        minWidth:70,
        textAlign:'center',
        color:'white',
        fontSize:20,
        borderRadius:10,
        margin:10,
        padding:5,
        textTransform:'capitalize'
    }
})