import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Form, Input} from './styles';
export default function Menssage() {
  const [find, setFind] = useState();
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Pesquisar"
          value={find}
          onChangeText={(text) => this.setState({find: text})}
          returnKeyType="send"
        />
      </Form>
    </Container>
  );
}
