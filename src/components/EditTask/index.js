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
import {ColorPicker, fromHsv} from 'react-native-color-picker';
import IconPicker from 'react-native-vector-icon-picker';
import {ItemContainer} from '../../pages/SessionFoco/styles';

export default function EditTask({isVisible, onCancel, data}) {
  const [colorTask, setColorTask] = useState(data.color);
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const [is_keyboard_open, setIsKeyboardOpen] = useState(false);
  const [icon, setIcon] = useState('star');
  console.log('->>>>>>>>', colorTask);
  console.log('-;;;;;;;;; ', data.color);
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

    setColorTask();
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
            <Icon color={'#e91e63'} size={windowHeight / 20} name="x" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Editar sessão</Text>
          <TouchableOpacity>
            <Icon color={'#e91e63'} size={windowHeight / 20} name="save" />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            color="#000"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={() => {}}>
            {data.name}
          </TextInput>
          <TextInput
            style={styles.input}
            color="#000"
            placeholder="Descrição"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={() => {}}>
            {data.description}
          </TextInput>
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
                    setColorTask(
                      fromHsv({
                        h: color.h,
                        s: color.s,
                        v: color.v,
                      }),
                    )
                  }
                  style={{flex: 1}}
                  hideSliders={true}
                  defaultColor={data.color}
                />
              </View>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconContainerHeader}>
                <Text style={styles.textPickers}>Escolha um ícone</Text>
                <View style={{marginTop: windowHeight / 20}}>
                  <IconPickedFromUser
                    name={data.icon}
                    size={windowHeight / 20}
                    color="#FFF"
                  />
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
        <View style={styles.deleteContainer}>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteText}>Deletar tarefa</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
