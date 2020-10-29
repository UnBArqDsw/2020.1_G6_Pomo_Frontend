import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: '#ff0000'
    },
    top: {
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#00ff00',
      // height: '33.3333%',
    },
    logo: {
      width: windowWidth * .20,
      height: windowWidth * .20,
    },
    topMainText: {},
    loginWithContainer: {
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 0.8,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#0000ff',
      // height: '33.3333%',
    },
    bodyMainText: {},
    inputsContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#ff0000',
      // height: '33.3333%',
    },
    bottom: {
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#000'
    },
    bottomMainText: {},
    input: {
      backgroundColor: 'white',
      borderWidth: 1,
      width: '85%',
      height: '15%',
      color: '#FFF',
      marginTop: 15,
    },
})