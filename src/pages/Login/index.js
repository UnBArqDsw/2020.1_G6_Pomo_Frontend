import React from 'react';
import { View,
        Text,
        Image,
        TextInput,
        TouchableOpacity, 
    } from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function Login() {
    return(
        <View style={styles.background}>
            <View style={styles.top}>
                <Image 
                    style={styles.logo}
                    source={logo}
                />
            </View>
            <View style={styles.loginWithContainer}>
                <TouchableOpacity
                    style={styles.btnLoginWith}
                    onPress={() => {}}
                >
                    <Text>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLoginWith}
                    onPress={() => {}}
                >
                    <Text>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnLoginWith}
                    onPress={() => {}}
                >
                    <Text>Apple</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.body}>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    autoCorrect={false}
                    onChangeText={() => {}}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={() => {}}
                />

                <TouchableOpacity
                    style={styles.btnLogin}
                    onPress={() => {}}
                >
                    <Text>Entrar</Text>
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
        </View>
          
      
    );
}