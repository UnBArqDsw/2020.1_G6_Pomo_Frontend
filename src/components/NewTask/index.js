import React from 'react';
import {View, Text, Modal} from 'react-native';
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
          <Icon color={'#e91e63'} size={35} name="x" onPress={() => {}} />
          <Text style={styles.headerText}>Criar sessão</Text>
          <Icon color={'#e91e63'} size={35} name="save" onPress={() => {}} />
        </View>
      </View>
    </Modal>
  );
}
