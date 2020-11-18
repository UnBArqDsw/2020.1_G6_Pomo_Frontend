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
    zIndex: 1,
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
    padding: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: '25%',
    color: '#FFF',
    marginBottom: 10,
  },
  colorAndIconContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  colorContainer: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    height: '100%',
    // alignItems: 'center',
    // borderWidth: 2,
    // backgroundColor: '#000',
  },
  iconContainerHeader: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainerPicker: {
    flex: 1,
    alignItems: 'center',
  },
  textPickers: {
    fontSize: windowHeight / 45,
    fontWeight: 'bold',
    color: '#e91e63',
  },
});
