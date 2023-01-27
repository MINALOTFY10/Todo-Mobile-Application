import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import MainButton from './main_button';
import TaskList from './tasks_list';
import MyTextInput from './text_input';
  
class TodoApp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {taskName: "", taskItems: []};
  } 

  visibleEdit = false;

 addTask = (name) => { 
    if(name.length > 2){
      console.log(name.length);
      this.setState({ taskItems:[...this.state.taskItems, name] });
      this.state.taskName = "";
      this.visibleEdit = false;
    }else{
      Alert.alert('OOP!', 'Task name must be more than 2 char long', [
        {text: 'Ok', onPress: () => console.log('alert closed')}
      ])
    }
  }
  

  deleteTask = (index) => {
    Alert.alert('Delete', 'Are you want to delete the task', [
      {text: 'Ok', onPress: () => {
        let taskItemsCopy = [...this.state.taskItems];
        taskItemsCopy.splice(index, 1);
        this.setState({ taskItems: [...taskItemsCopy] })} 
      },
      {text: 'Cancel', onPress: () => console.log("cancel")
      }
    ],
    {
      cancelable: true,
    }
    )
     
  }

  editTask = (index, g) => {
    let taskItemsCopy = [...this.state.taskItems];
    taskItemsCopy.splice(index, 1);
    this.setState({ taskItems: [...taskItemsCopy] })
    this.state.taskName = g;
    this.visibleEdit = true;
  }


  render(){ 
    return (
    <View>
        <View style={{ alignItems:"center", justifyContent:"center",}}>
            <MyTextInput this= {this} />

            {
              this.visibleEdit === false  ?   
              <MainButton firstState={this} secState = {this.state} title= "Add" style= {styles.button}/> 
              :
              <MainButton firstState= {this} secState= {this.state} title= "Edit" style= {styles.editButton}/>
            }      
        </View>     

        <View>
            <Text style={styles.sectionTitle}>Tasks</Text>
        </View>

        <TaskList firstState= {this.state.taskItems} this= {this} />
    </View>
      
        )
    }
}

export default TodoApp;

const styles = StyleSheet.create({

  editButton: {
    backgroundColor:"#1B941B",
    width:80,
    borderRadius:60,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    marginTop:20,
  },
  button: {
    width:80,
    backgroundColor: "#FFFF",
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderRadius:60,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
    marginTop:20,
  },
  loginText: {
    color: "black",
    fontSize: 17,
  },
  sectionTitle: {
    marginTop: 15,
    fontSize: 27,
    fontWeight: 'bold',
    paddingLeft: 20,
  }
})