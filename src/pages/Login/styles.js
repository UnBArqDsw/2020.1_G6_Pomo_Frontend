import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight);

export default StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: '#FF0004'
  },
  top: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  // logo: {
  //   width: windowWidth * .20,
  //   height: windowWidth * .20,
  // },
  loginWithContainer: {
    flex: 0.6,
    // width: '45%',
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#000',
  },
  connectText: {
    // fontSize: 20,
    fontSize: windowHeight * 0.03,
    marginBottom: 10,
    color: '#FFF',
  },
  btnLoginWithFacebook: {
    width: '50%',
    height: '15%',
    borderRadius: 10,
    backgroundColor: '#576ea4',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLoginWithFacebookText: {
    color: '#FFF',
  },
  btnLoginWithGoogle: {
    width: '50%',
    height: '15%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLoginWithApple: {
    width: '50%',
    height: '15%',
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    // fontSize: 20,
    fontSize: windowHeight * 0.03,
    color: '#FFF',
  },
  connectWithOthersButton: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000'
  },
  connectWithOthersButtonText: {
    fontSize: windowHeight * 0.02,
    color: '#000',
  },
  body: {
    flex: 0.6,
    alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#0000ff',
  },
  input: {
    backgroundColor: '#BF0123',
    borderWidth: 1,
    borderRadius: 5,
    width: '85%',
    height: '25%',
    color: '#FFF',
    marginBottom: 10,
  },
  btnLogin: {
    marginTop: 15,
    width: '40%',
    height: '20%',
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLoginText: {
    color: '#FF005C',
    fontWeight: 'bold',
  },
  bottom: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#000'
  },
  bottomMainText: {},
  btnRegister: {
    marginBottom: 10,
  },
  btnRegisterText: {
    color: '#FFF',
    fontSize: windowWidth * 0.035,
  },
  btnRecovery: {},
  btnRecoveryText: {
    color: '#FFF',
    fontSize: windowWidth * 0.035,
  },
});
