import React from 'react';
import {View, Text, Modal, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function NewTask({isVisible, onCancel}) {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent={true}
      onRequestClose={onCancel}>
      <View style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onCancel}>
            <Icon color={'#e91e63'} size={35} name="x" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Criar sessão</Text>
          <TouchableOpacity>
            <Icon color={'#e91e63'} size={35} name="save" />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Icone"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            placeholder="Cor"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
        </View>
      </View>
    </Modal>
  );
}
