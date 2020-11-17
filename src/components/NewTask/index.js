import React from 'react';
import {View, Text, Modal} from 'react-native';
import styles from './styles';

export default function NewTask({isVisible, onCancel}) {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent={true}
      onRequestClose={onCancel}>
      <View style={styles.background}>
        <Text>CRIAR TAREFA</Text>
      </View>
    </Modal>
  );
}
