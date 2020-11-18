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
    flex: 0.3,
    // backgroundColor: '#0000FF',
    padding: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    height: '40%',
    color: '#FFF',
    marginBottom: 10,
  },
  colorAndIconContainer: {
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    padding: 10,
    borderRadius: 20,
  },
  colorContainer: {
    flex: 1,
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    height: '100%',
    // alignItems: 'center',
    // borderWidth: 2,
    // backgroundColor: '#000',
  },
  colorContainerHeader: {
    flex: 0.1,
    alignItems: 'center',
    // backgroundColor: '#000',
  },
  iconContainerHeader: {
    flex: 1,
    alignItems: 'center',
  },
  colorContainerPicker: {
    flex: 1,
  },
  iconContainerPicker: {
    flex: 1,
    alignItems: 'center',
  },
  textPickers: {
    fontSize: windowHeight / 45,
    fontWeight: 'bold',
    color: '#000',
  },
  deleteContainer: {
    flex: 0.2,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButton: {
    height: '50%',
    width: '50%',
    backgroundColor: '#FF0000',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    fontSize: windowHeight / 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
