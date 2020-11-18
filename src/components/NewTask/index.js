import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconPickedFromUser from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {ColorPicker} from 'react-native-color-picker';
import IconPicker from 'react-native-vector-icon-picker';

export default function NewTask({isVisible, onCancel}) {
  const windowHeight = Dimensions.get('window').height;
  const [is_keyboard_open, setIsKeyboardOpen] = useState(false);
  const [icon, setIcon] = useState('star');
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
    console.log(is_keyboard_open);
  });

  function keyboardDidShow() {
    setIsKeyboardOpen(true);
  }

  function keyboardDidHide() {
    setIsKeyboardOpen(false);
  }
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
        {!is_keyboard_open ? (
          <View style={styles.colorAndIconContainer}>
            <View style={styles.colorContainer}>
              <View style={styles.colorContainerHeader}>
                <Text style={styles.textPickers}>Escolha uma cor</Text>
              </View>
              <View style={styles.colorContainerPicker}>
                <ColorPicker
                  onColorChange={(color) =>
                    console.log(`Color selected: ${color.h}`)
                  }
                  style={{flex: 1}}
                  hideSliders={false}
                />
              </View>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconContainerHeader}>
                <Text style={styles.textPickers}>Escolha um ícone</Text>
                <View style={{marginTop: windowHeight / 20}}>
                  <IconPickedFromUser name={icon} size={windowHeight / 20} />
                </View>
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
                  onSelect={(icon) => setIcon(icon.icon)}
                />
              </View>
            </View>
          </View>
        ) : (
          console.log('teclado aberto')
        )}
      </KeyboardAvoidingView>
    </Modal>
  );
}
