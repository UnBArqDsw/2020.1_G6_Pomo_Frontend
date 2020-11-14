import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    background: {
        flex: 1,
        // backgroundColor: '#fff4f4'
    }, 
    header: {
        flex: .11,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#FF0004',
        borderBottomWidth: 2,
        borderColor: '#e1e1e1',
        // borderBottomLeftRadius: 15,
        // borderBottomRightRadius: 15,
    },
    headerText: {
        fontSize: windowWidth * .1,
        fontWeight: 'bold',
        color: '#e1e1e1',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        // marginLeft: 10
    },
    bodyText: {
        marginTop: 20,
        color: '#e1e1e1',
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#BF0123',
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        height: '11%',
        color: '#FFF',
        marginTop: 20,
    },
    btnSend: {
        marginTop: 15,
        width: '40%',
        height: '9%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnSendText: {
          color: '#FF005E',
          fontSize: windowWidth * .05,
          fontWeight: 'bold',
      },
});