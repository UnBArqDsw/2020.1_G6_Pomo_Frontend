import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import {ColorPicker} from 'react-native-color-picker';

export default function NewTask({isVisible, onCancel}) {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent={true}
      onRequestClose={onCancel}>
      <KeyboardAvoidingView style={styles.background} behavior="height">
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
            color="#000"
            placeholder="Nome"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            color="#000"
            placeholder="Descrição"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
          <TextInput
            style={styles.input}
            color="#000"
            placeholder="Icone"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.colorAndIconContainer}>
          <ColorPicker
            onColorChange={(color) => console.log(`Color selected: ${color.h}`)}
            style={{flex: 0.6}}
            hideSliders={true}
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
