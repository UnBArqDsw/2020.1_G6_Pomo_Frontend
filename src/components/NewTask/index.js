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
import IconPickedFromUser from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {ColorPicker} from 'react-native-color-picker';
import IconPicker from 'react-native-vector-icon-picker';

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
            <Icon color={'#e91e63'} size={30} name="x" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Criar sessão</Text>
          <TouchableOpacity>
            <Icon color={'#e91e63'} size={30} name="save" />
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
        </View>
        <View style={styles.colorAndIconContainer}>
          <View style={styles.colorContainer}>
            <Text style={styles.textPickers}>Escolha uma cor</Text>
            <ColorPicker
              onColorChange={(color) =>
                console.log(`Color selected: ${color.h}`)
              }
              style={{flex: 1}}
              hideSliders={true}
            />
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.iconContainerHeader}>
              <Text style={styles.textPickers}>Escolha um ícone</Text>
            </View>
            <View style={styles.iconContainerPicker}>
              <IconPicker
                icons={[
                  {
                    family: 'AntDesign',
                    icons: [
                      'fork',
                      'lock',
                      'unlock',
                      'laptop',
                      'star',
                      'heart',
                      'team',
                      'calculator',
                    ],
                  },
                ]}
                onSelect={(icon) => console.log(icon)}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
