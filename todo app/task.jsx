import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, } from "react-native";

const Task = (props) => {
    
    let today = new Date();
    let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    let time = today.getHours()+':'+today.getMinutes();

    return(
        <View style={{marginTop: 20}}>
            <View >
                <View style={styles.taskContainer}>
                    <View>
                        <Text style={styles.taskText}>{props.text}</Text>
                        <Text style={styles.taskTime}>{date +', '+ time}</Text>
                    </View>

                    <View style={{flexDirection: "row", marginEnd: 0,}}>
                        <TouchableOpacity style={styles.editButton} onPress={() => props.this.editTask(props.index, props.text)}>
                            <Text style={styles.loginText}>Edit</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteButton}  onPress={() => props.this.deleteTask(props.index)}>
                            <Text style={styles.loginText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                        
                    
                </View>
            </View>
        </View>
    )
}

export default Task;

const styles = StyleSheet.create({
    taskContainer: {
       backgroundColor: "white",
       padding: 15,
       borderRadius: 10,
       flexDirection: 'row',
       marginBottom: 20,
       height: 90,
       marginHorizontal:15,
       justifyContent: "space-between"
     
    },
    taskText: {
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    taskTime: {
        fontSize:12,
        marginTop:5,
        fontFamily: 'sans-serif-medium',
        fontSize: 16
    },
    editButton: {
        width: 55,
        height:"60%",
        backgroundColor:"#1B941B",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        marginTop:20,
        marginRight:15
    },
    deleteButton: {
        width: 60,
        height:"60%",
        backgroundColor:"red",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        marginTop:20,
        marginRight:15
    },
    loginText: {
      color: "white",
      fontSize: 13
        //fontWeight: 700,
      },
})