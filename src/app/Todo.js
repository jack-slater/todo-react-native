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
        <TextInput style={styles.input}
          value={this.state.newTodo}
          onChangeText={this.handleChange.bind(this)}
        />
        <TouchableOpacity onPress={this.handlePress.bind(this)} style={styles.button} >
          <Text style={styles.text} >Make</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text key={i} style={styles.text} >{todo}</Text>
          ))
        }
        </View>
      </View>
    );
  }
}
