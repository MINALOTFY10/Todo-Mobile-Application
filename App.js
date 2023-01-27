import React from 'react';
import { View } from 'react-native';
import TodoApp from './todo app/todo_app';

export default function App() {
 
  return ( 
    <View style={{flex: 1, backgroundColor: '#E8EAED'}}>
      <TodoApp/>
    </View>
  );
}