import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  Keyboard,
} from 'react-native';
import {ModalButton, TextButton, Form, Input} from './styles';
const {height} = Dimensions.get('window');

const Modal = ({show, close, user}) => {
  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });
  const [newName, setNewName] = useState({});

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, {toValue: 0, duration: 100}),
      Animated.timing(state.opacity, {toValue: 1, duration: 300}),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, {
        toValue: height,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {toValue: 0, duration: 300}),
      Animated.timing(state.container, {toValue: height, duration: 100}),
    ]).start();
  };

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{translateY: state.container}],
        },
      ]}>
      <Animated.View
        style={[
          styles.modal,
          {
            transform: [{translateY: state.modal}],
          },
        ]}>
        <View style={styles.indicator} />
        <>
          <Form>
            <Input
              autoCorrect={false}
              placeholder={`${user}`}
              returnKeyType="send"
              // onSubmitEditing={this.handleAddUser}
              value={newName}
              onChangeText={(text) => setNewName(text)}
            />
          </Form>
        </>
        <ModalButton onPress={close}>
          <TextButton>Close</TextButton>
        </ModalButton>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  modal: {
    bottom: 350,

    height: 400,

    backgroundColor: 'rgba(51, 51, 51, 0.8)',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 60,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
});

export default Modal;
