import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    padding: 10
  },
  heading: {
    fontSize: 60,
    color: 'black',
    fontFamily: 'notoserif'
  },
  input: {
    backgroundColor: 'yellow',
    width: (width / 10) * 9,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 20
  },
  button: {
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});
