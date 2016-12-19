import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

export class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
    console.warn(JSON.stringify(this.state, null, 2));
  }

  handleChange (text) {
    this.setState({newTodo: text});
  }

  handlePress () {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>TODO List</Text>
        <View style={styles.form}>
          <TextInput style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity onPress={this.handlePress.bind(this)}
            style={styles.button} >
            <Text style={styles.buttonText} >Make</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.todos}>
          {this.state.todos.map((todo, i) => (
            <View style={styles.todo} key={i} >
              <Text style={styles.todoText} >{todo}</Text>
            </View>

          ))
        }
        </View>
      </View>
    );
  }
}
