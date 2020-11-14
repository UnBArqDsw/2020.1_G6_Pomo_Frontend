import React from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import styles from './styles';
import Background from '../../components/Background';

export default function Recovery() {

  return (
        <Background>
            <View style={styles.background}>
                <StatusBar barStyle="light-content" backgroundColor="#FF0004" />
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Recuperar senha
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.bodyText}>
                        Digite seu e-mail para recuperar a senha
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
                
            </View>
        </Background>
    
  );
}
