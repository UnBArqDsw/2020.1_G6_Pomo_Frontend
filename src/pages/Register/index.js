import React from 'react';
import { 
    View,
    Text,
    KeyboardAvoidingView,
    StatusBar,
    Image,
    FlatList
} from 'react-native';

import styles from './styles';
import Background from '../../components/Background';
import logo from '../../assets/logo.png';

export default function Register() {

  return (
    <Background>
        <KeyboardAvoidingView behavior='height' style={styles.background}>
            <StatusBar barStyle="light-content" backgroundColor="#FF0004" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Bem-vind@ ao <Text style={{color:'#373737'}}>POMO</Text>!</Text>
            </View>
            <FlatList
                style={styles.bodyContainer}
                data={[1]}
                keyExtractor={item => 1}
                showsVerticalScrollIndicator={true}
                renderItem={() => (
                    <View style={styles.body}>
                        <Image
                            style={styles.logoStyle}
                            source={logo}
                        />    

                        <Text style={styles.descriptionWelcome}>Cadastre-se agora mesmo,</Text>
                        <Text style={styles.descriptionText}>E planeje, execute suas tarefas de uma forma mais fácil!</Text>
                    </View>
                )}
            />


        </KeyboardAvoidingView>
    </Background>
    
  );
}
