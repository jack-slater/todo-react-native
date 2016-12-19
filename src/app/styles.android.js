import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 20
  },
  heading: {
    fontSize: 60,
    color: 'black',
    fontFamily: 'notoserif'
  },
  input: {
    flex: 0.7,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 24,
    borderBottomColor: 'lightgrey',
    borderColor: 'blue',
    borderRadius: 1
  },
  button: {
    alignItems: 'center',
    flex: 0.3,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  buttonText : {
    fontSize: 24,
    fontWeight: 'bold'
  },
  form: {
    flexDirection: 'row'
  },
  todos: {
    marginTop: 30
  },
  todo: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  todoText: {
    fontSize: 24
  }
});
