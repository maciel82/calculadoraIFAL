import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle: {
        alignItems:"center",
        justifyContent:"center",
        padding:10
    },
    textTitle:{
        color:"#1E90FF",
        fontSize:34,
        fontWeight:"bold",
        marginTop: -30,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderWidth: 6,
        borderColor: '#1E90FF',
        borderRadius: 6,
        textAlign: 'center'
    },
    box1: {     
        top: 0,
        left: 1,
        width: 50,
        height: 50,
        backgroundColor: 'red',
      },
      box2: {       
        top: -20,
        left: 30,
        width: 40,
        height: 40,
        backgroundColor: 'blue',
      },
      box3: { 
        top: -50,
        left: -10,
        width: 50,
        height: 45,
        backgroundColor: 'green',
      },
      text: {
        color: '#FFF',
        fontSize: 10,
        fontWeight:"bold",
        textAlign: "center",
        marginTop: 16,
      }
  });

  export default styles