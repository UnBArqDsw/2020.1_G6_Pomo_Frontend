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
      name: 'Arthur',
      avatar_url:
        'https://raw.githubusercontent.com/UnBArqDsw/2020.1_G6_Pomo/master/docs/img/arthur.jpg',
      LastMenssage: 'oi',
    },
    {
      name: 'Ximira',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk0-483Jw3zN4jn9qWI_HiLR5Hd4bfUs_Rhg&usqp=CAU',

      LastMenssage: 'oi',
    },
    {
      name: 'Andre Eduardo',
      avatar_url:
        'https://raw.githubusercontent.com/UnBArqDsw/2020.1_G6_Pomo/master/docs/img/andre.png',
      LastMenssage: 'oi',
    },
    {
      name: 'João',
      avatar_url:
        'https://raw.githubusercontent.com/UnBArqDsw/2020.1_G6_Pomo/master/docs/img/joao.png',
      LastMenssage: 'oi',
    },
    {
      name: 'Marco',
      avatar_url:
        'https://raw.githubusercontent.com/UnBArqDsw/2020.1_G6_Pomo/master/docs/img/marco.png',
      LastMenssage: 'oi',
    },
    {
      name: 'Thallys',
      avatar_url:
        'https://raw.githubusercontent.com/UnBArqDsw/2020.1_G6_Pomo/master/docs/img/thallys.png',
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
                uri: item.avatar_url,
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
