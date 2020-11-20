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
import {useDispatch, useSelector} from 'react-redux';
import api from '../../services/api';

export default function NewTask({isVisible, onCancel}) {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const [is_keyboard_open, setIsKeyboardOpen] = useState(false);
  const [icon, setIcon] = useState('star');
  const [name, setName] = useState('');
  const [colorTask, setColorTask] = useState('#FF0000');
  const [description, setDescription] = useState('');

  const user = useSelector((state) => state.user.profile);
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
    // console.log(is_keyboard_open);
  });

  function keyboardDidShow() {
    setIsKeyboardOpen(true);
  }

  function keyboardDidHide() {
    setIsKeyboardOpen(false);
  }

  async function createTask() {
    // try {
    // setColorTask(fromHsv({h: colorTask.h, s: colorTask.s, v: colorTask.v}));
    console.log(colorTask);
    const data = await api.post(`users/${user.id}/tasks`, {
      color: colorTask,
      name: name,
      description: description,
      icon: icon,
    });
    // console.log(colorTask, name, description, icon);
    if (data.status == 200) {
      if (isVisible) {
        alert('Sessão de foco criada com sucesso!');
      }
    } else {
      if (isVisible) {
        alert('campos incorretos');
      }
    }
    // } catch (error) {
    //   alert('Ocorreu um erro ao buscar os items');
    // }
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
          <Text style={styles.headerText}>Criar sessão</Text>
          <TouchableOpacity onPress={() => createTask()}>
            <Icon color={'#e91e63'} size={windowHeight / 20} name="save" />
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            color="#000"
            placeholder="Nome"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            color="#000"
            placeholder="Descrição"
            autoCorrect={false}
            placeholderTextColor="#000"
            onChangeText={(text) => setDescription(text)}
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
                  defaultColor={colorTask}
                />
              </View>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.iconContainerHeader}>
                <Text style={styles.textPickers}>Escolha um ícone</Text>
                <View style={{marginTop: windowHeight / 20}}>
                  <IconPickedFromUser
                    name={icon}
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
      </KeyboardAvoidingView>
    </Modal>
  );
}
