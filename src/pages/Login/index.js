import React from 'react';
import { View,
        Text,
        Image,
        TextInput,
        TouchableOpacity,
        KeyboardAvoidingView, 
    } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import Background from '../../components/Background';

export default function Login() {
    return(
        <Background>
        <KeyboardAvoidingView
            behavior="height"
            style={styles.background}
            // keyboardVerticalOffset = {30}
        >
            
            <View style={styles.top}>
                <Image 
                    style={styles.logo}
                    source={logo}
                />
            </View>
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

            </View>
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCorrect={false}
                    placeholderTextColor='#FFF'
                    keyboardType='email-address'
                    onChangeText={() => {}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
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
            </View>
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