import React from 'react';
import { 
    View,
    Text,
    KeyboardAvoidingView,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';
import Background from '../../components/Background';
import logo from '../../assets/logo.png';
import Icon from "react-native-vector-icons/Feather";

export default function Register() {

    const myIcon = (<Icon name="rocket" size={30} color="#900" />)
  return (
    <Background>
        <KeyboardAvoidingView behavior='height' style={styles.background}>
            <StatusBar barStyle="light-content" backgroundColor="#FF0004" />
            <View style={styles.header}>
                <Text style={styles.headerText}>Bem-vind@ ao <Text style={{color:'#00FF00'}}>POMO</Text>!</Text>
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
                        <Text style={styles.descriptionText}>e aumente sua organização e produtividade!</Text>
                        
                        <View style={styles.inputsContainer}>
                          <View style={styles.inputsContainerTextInput}>
                                <Icon name="user" size={30} color="#00FF00" style={styles.icons}/>
                                <TextInput
                                    style={styles.inputsForm}
                                    placeholder='Digite seu nome completo'
                                    placeholderTextColor='#7c86b5'
                                    autoCorrect={false}
                                    autoCapitalize={false}
                                />
                          </View>
                          <View style={styles.inputsContainerTextInput}>
                                <Icon name="mail" size={30} color="#00FF00" style={styles.icons}/>
                                <TextInput
                                    style={styles.inputsForm}
                                    placeholder='Digite seu e-mail'
                                    placeholderTextColor='#7c86b5'
                                    autoCorrect={false}
                                    autoCapitalize={false}
                                    keyboardType={'email-address'}
                                />

                          </View>
                          <View style={styles.inputsContainerTextInput}>
                                <Icon name="lock" size={30} color="#00FF00" style={styles.icons}/>
                                <TextInput
                                    style={styles.inputsForm}
                                    placeholder='Digite sua senha'
                                    placeholderTextColor='#7c86b5'
                                    autoCorrect={false}
                                    autoCapitalize={false}
                                    secureTextEntry={true}
                                />
                          </View>
                  
                          <View style={styles.inputsContainerTextInput}>
                                <Icon name="lock" size={30} color="#00FF00" style={styles.icons}/>
                                <TextInput
                                    style={styles.inputsForm}
                                    placeholder='Confirmação de senha'
                                    placeholderTextColor='#7c86b5'
                                    autoCorrect={false}
                                    autoCapitalize={false}
                                    secureTextEntry={true}
                                />
                          </View>
                          <View style={styles.inputsContainerTextInput}>
                                <Icon name="phone" size={30} color="#00FF00" style={styles.icons}/>
                                <TextInput
                                    style={styles.inputsForm}
                                    placeholder='Telefone'
                                    placeholderTextColor='#7c86b5'
                                    autoCorrect={false}
                                    autoCapitalize={false}
                                />
                          </View>
                        </View>
                        <View style={styles.btnRegisterContainer}>
                            <TouchableOpacity style={styles.btnRegister}>
                                <Text style={styles.btnRegisterText}> Cadastrar</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.detailsContainer}>
                      
                            <Text style={styles.whatispomoText}>O que é o POMO?</Text>
                            <Text style={styles.pomoIsText}>O Pomo é uma aplicação de gerência de atividades, ou como apelidamos, sessões de foco, que, além de faze-lo de forma simples e prática, adiciona informações importantes de forma visual, usando gráficos, para que o usuário consiga ter uma idéia de sua produtividade.

O app incentiva os usuários a completarem suas atividades com desafios entre os amigos, feed e chat.</Text>
                        </View>
                        <View style={styles.documentationContainer}>
                            <Text style={styles.documentationText}>Documentação Oficial</Text>
                        </View>
                    </View>
                )}
            />


        </KeyboardAvoidingView>
    </Background>
    
  );
}
