import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { Reddit } from './reddit';

export class Todo extends Component {
  constructor () {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  componentWillMount () {
    fetch('http://192.168.0.16:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({todos}));
  }

  handleChange (text) {
    this.setState({newTodo: text});
  }

  handlePress () {
    fetch('http://192.168.0.16:3000/todos', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
    .then(res => res.json())
    .then(todo => {
      const todos = [todo, ...this.state.todos];
      this.setState({todos, newTodo: ''});
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Reddit />
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
              <Text style={styles.todoText} >{todo.name}</Text>
            </View>

          ))
        }
        </View>
      </View>
    );
  }
}
