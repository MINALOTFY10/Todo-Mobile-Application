import React from 'react';
import { StyleSheet } from 'react-native';
import Task from './task';

const TaskList = (props) => {

    return (
        props.firstState.map((item, index) => {
            return <Task key={index} text={item} this={props.this} index={index}/>
          })
    )

}

export default TaskList;

const styles = StyleSheet.create({

  text: {
    color: "black",
    fontSize: 17,
  },

})