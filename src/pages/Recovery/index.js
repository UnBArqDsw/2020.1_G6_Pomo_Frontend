import React from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';

import styles from './styles';
import Background from '../../components/Background';

export default function Recovery() {

  return (
        <Background>
            <KeyboardAvoidingView behavior='height' style={styles.background}>
                <StatusBar barStyle="light-content" backgroundColor="#FF0004" />
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Recuperar Senha
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        Um e-mail será enviado com as informações
                        </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="   Digite seu email"
                        autoCorrect={false}
                        placeholderTextColor="#FFF"
                        onChangeText={() => {}}
                    />

                    <TouchableOpacity style={styles.btnSend} onPress={() => {}}>
                        <Text style={styles.btnSendText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
                
            </KeyboardAvoidingView>
        </Background>
    
  );
}
