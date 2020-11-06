import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  Chats,
  InitTitle,
  LMenssage,
  Info,
  Avatar,
  Title,
  LastMenssage,
} from './styles';
export default function Menssage() {
  const [find, setFind] = useState();
  const [chats, setChat] = useState([
    {
      name: 'Andre',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'Ximira',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'Souza',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'Pelé',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'XXX',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'Naruto',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'Sasuke',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
    {
      name: 'Andre',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
  ]);
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
      <InitTitle>Menssages</InitTitle>
      <Chats
        data={chats}
        keyExtractor={(chat) => String(chat.id)}
        renderItem={({item}) => (
          <LMenssage>
            <Avatar source={{uri: item.avatar_url}} />
            <Info>
              <Title>{item.name}</Title>
              <LastMenssage>{item.LastMenssage}</LastMenssage>
            </Info>
          </LMenssage>
        )}
      />
    </Container>
  );
}
