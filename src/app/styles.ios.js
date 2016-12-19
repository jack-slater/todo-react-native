import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 40
  },
  box: {
    backgroundColor: 'yellow',
    width: width / 2,
    height: height / 3,
    position: 'absolute',
    top: 20,
    left: 30,
    borderRadius: 15
  },
  text: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold'
  }
});
