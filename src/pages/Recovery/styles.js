import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    background: {
        flex: 1,
        // backgroundColor: '#fff4f4'
    }, 
    header: {
        flex: .13,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#FF005C',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    headerText: {
        fontSize: windowWidth * .1,
        color: '#fff',
    },
    body: {
        flex: 1,
        alignItems: 'center',
        // marginLeft: 10
    },
    bodyText: {
        marginTop: 20,
    },
    input: {
        // backgroundColor: '#e1e1e1',
        borderWidth: 1,
        borderRadius: 5,
        width: '85%',
        height: '11%',
        color: '#000',
        marginTop: 20,
    },
    btnSend: {
        marginTop: 15,
        width: '40%',
        height: '10%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btnSendText: {
          color: '#FF005C'
      },
});