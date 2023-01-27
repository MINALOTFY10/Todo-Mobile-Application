import React from "react";
import { StyleSheet, TextInput, } from "react-native";

const MyTextInput = (props) => {
    return(
        <TextInput 
              value={props.this.state.taskName}
              placeholder="Enter your Task" 
              onChangeText={(value) => {
                props.this.setState({taskName: value})
                //console.log(value)
              }} 
              style={styles.Input} />
    )
}

export default MyTextInput;

const styles = StyleSheet.create({
    Input: {
        marginTop: "20%",
        width: "75%",
        height: 50,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#C0C0C0',
        padding: 11,
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
      },
})