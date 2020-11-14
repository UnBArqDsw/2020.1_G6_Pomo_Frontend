import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    background: {
        flex: 1,
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        alignItems: 'flex-end',
        fontSize: windowWidth * .08,
        color: '#FFF',
        fontWeight: 'bold',
      },
      logoStyle: {
          marginTop: 20,
          width: windowWidth * 0.36,
          height: windowWidth * 0.38,
          marginBottom: 20,
      },
      bodyContainer: {
          flex: 1,
      },
      body: {
          alignItems: 'center'
      },
      descriptionWelcome: {
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
      },
      descriptionText: {
        fontSize: 15,
        color: '#FFF',
      },

});