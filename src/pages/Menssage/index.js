import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  Chats,
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

      <Chats
        data={chats}
        keyExtractor={(chat) => String(chat.name)}
        renderItem={({item}) => (
          <LMenssage>
            <Avatar
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk0-483Jw3zN4jn9qWI_HiLR5Hd4bfUs_Rhg&usqp=CAU',
              }}
            />
            <Info>
              <Title>{item.name}</Title>
              <LastMenssage>{'Ultima menssagem ...'}</LastMenssage>
            </Info>
          </LMenssage>
        )}
      />
    </Container>
  );
}
