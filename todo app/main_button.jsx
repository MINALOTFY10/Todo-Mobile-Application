import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
  

const MainButton = (props) => {

    return (
    <View>
        <TouchableOpacity  style={props.style} onPress={() => props.firstState.addTask(props.secState.taskName)}>
            <Text style={styles.text}>{props.title}</Text> 
        </TouchableOpacity>
    </View>
    )

}

export default MainButton;

const styles = StyleSheet.create({

  text: {
    color: "black",
    fontSize: 17,
  },

})