import React, { useEffect, useState } from 'react';
import { View,
        Text,
        Image,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView, 
        Keyboard,
        Animated,
        Dimensions,
        StatusBar
    } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

export default function Login() {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const [logo_animated] = useState(new Animated.ValueXY({x: windowWidth * .30, y: windowWidth * .30}));
    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
    const [opacity] = useState(new Animated.Value(0));
    const [ is_keyboard_open, setIsKeyboardOpen ] = useState(false);

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        
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
              toValue: windowWidth * .45,
              duration: 500,
            }),
            Animated.timing(logo_animated.y, {
              toValue: windowWidth * .45,
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
              toValue: windowWidth * .30,
              duration: 500,
            }),
            Animated.timing(logo_animated.y, {
              toValue: windowWidth * .30,
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
    console.disableYellowBox = true
    return(
        <Background>
            <KeyboardAvoidingView
                behavior="height"
                style={styles.background}
            >
                <StatusBar barStyle="light-content" backgroundColor="#FF0004" />
                
                <View style={styles.top}>
                    <Animated.Image 
                        style={{ width: logo_animated.x, height: logo_animated.y }}
                        source={logo}
                    />
                </View>
                {!is_keyboard_open ? (
                <View style={styles.loginWithContainer}>
                    <Text style={styles.connectText}>
                        ────  CONECTAR  ────
                    </Text>
                    <TouchableOpacity
                        style={styles.btnLoginWithFacebook}
                        onPress={() => {}}
                    >
                        <Text style={styles.btnLoginWithFacebookText}>facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLoginWithGoogle}
                        onPress={() => {}}
                    >
                        <Text>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnLoginWithApple}
                        onPress={() => {}}
                    >
                        <Text>Apple</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.orText}>
                        ──────    ou    ──────
                    </Text>

                </View>) : (
                    console.log('teclado aberto')
                )}
                <Animated.View 
                    style={[
                    styles.body,
                    {
                        opacity: opacity,
                        transform: [
                        { translateY: offset.y }
                        ]
                    }
                    ]}
                >
        
                    <TextInput
                        style={styles.input}
                        placeholder="   E-mail"
                        autoCorrect={false}
                        placeholderTextColor='#FFF'
                        keyboardType='email-address'
                        onChangeText={() => {}}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="   Senha"
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholderTextColor='#FFF'
                        onChangeText={() => {}}
                    />

                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={() => {}}
                    >
                        <Text style={styles.btnLoginText}>ENTRAR</Text>
                    </TouchableOpacity>
                </Animated.View>
                <View style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.btnRegister}
                        onPress={() => {}}
                    >
                        <Text style={styles.btnRegisterText}>INSCREVER-SE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnRecovery}
                        onPress={() => {}}
                    >
                        <Text style={styles.btnRecoveryText}>RECUPERAR SENHA</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Background>
          
      
    );
}