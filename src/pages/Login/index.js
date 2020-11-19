import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

import {useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

i;
import {signInRequest} from '../../store/modules/auth/actions';

export default function Login() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const dispatch = useDispatch();

  const [logo_animated] = useState(
    new Animated.ValueXY({x: windowWidth * 0.3, y: windowWidth * 0.3}),
  );
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [opacity] = useState(new Animated.Value(0));
  const [is_keyboard_open, setIsKeyboardOpen] = useState(false);
  const navigation = useNavigation();
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 0,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 2000,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    setIsKeyboardOpen(true);

    Animated.parallel([
      Animated.timing(logo_animated.x, {
        toValue: windowWidth * 0.45,
        duration: 500,
      }),
      Animated.timing(logo_animated.y, {
        toValue: windowWidth * 0.45,
        duration: 500,
      }),
      Animated.spring(offset.y, {
        toValue: 20,
        speed: 6,
        bounciness: 25,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    setIsKeyboardOpen(false);

    Animated.parallel([
      Animated.timing(logo_animated.x, {
        toValue: windowWidth * 0.3,
        duration: 500,
      }),
      Animated.timing(logo_animated.y, {
        toValue: windowWidth * 0.3,
        duration: 500,
      }),
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 6,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 3000,
      }),
    ]).start();
  }
  function navigateTo(page) {
    navigation.navigate(page);
    // navigation.replace(page)
  }
  console.disableYellowBox = true;

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <Background>
      <KeyboardAvoidingView behavior="height" style={styles.background}>
        <StatusBar barStyle="light-content" backgroundColor="#FF0004" />

        <View style={styles.top}>
          <Animated.Image
            style={{width: logo_animated.x, height: logo_animated.y}}
            source={logo}
          />
        </View>
        {!is_keyboard_open ? (
          <View style={styles.loginWithContainer}>
            <Text style={styles.connectText}>──── CONECTAR ────</Text>
            <TouchableOpacity
              style={styles.btnLoginWithFacebook}
              onPress={() => {}}>
              <Text style={styles.btnLoginWithFacebookText}>facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnLoginWithGoogle}
              onPress={() => {}}>
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnLoginWithApple}
              onPress={() => {}}>
              <Text>Apple</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>────── ou ──────</Text>
          </View>
        ) : (
          console.log('teclado aberto')
        )}
        <Animated.View
          style={[
            styles.body,
            {
              opacity: opacity,
              transform: [{translateY: offset.y}],
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder="   E-mail"
            autoCorrect={false}
            placeholderTextColor="#FFF"
            keyboardType="email-address"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="   Senha"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#FFF"
            onChangeText={(text) => {
              setPassword(text);
            }}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => handleSubmit()}>
            <Text style={styles.btnLoginText}>ENTRAR</Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigateTo('Register')}>
            <Text style={styles.btnRegisterText}>INSCREVER-SE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRecovery}
            onPress={() => navigateTo('Recovery')}>
            <Text style={styles.btnRecoveryText}>RECUPERAR SENHA</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}
