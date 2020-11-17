import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  background: {
    // backgroundColor: 'rgba(0,0,0,0.9)',
    backgroundColor: '#FFF',
    height: '100%',
    padding: 10,
  },
  header: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#FF0000',
  },
  headerText: {
    fontSize: windowHeight / 30,
    color: '#000',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    // backgroundColor: '#0000FF',
  },
});
