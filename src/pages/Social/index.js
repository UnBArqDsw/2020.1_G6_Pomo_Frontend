import React, {useState} from 'react';

import {useDispatch} from 'react-redux';

import {chatNav} from '../../store/modules/navigate/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  Header,
  Avatar,
  Body,
  Users,
  LUser,
  LTitle,
  Info,
  Description,
  Button,
  TextButton,
} from './styles';
export default function Social({navigation}) {
  const [users, setUsers] = useState([
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
      name: 'Andre e',
      avatar_url: 'https://avatars.dicebear.com/api/bottts/t.svg?w=50&h=50',
      LastMenssage: 'oi',
    },
  ]);
  const dispatch = useDispatch();
  function handleSubmit() {
    console.tron.log(navigation);
    navigation.navigate('lchat');

    dispatch(chatNav(true));
  }

  return (
    <Container>
      <Header>
        <Title>{'Social'}</Title>

        <Icon
          color={'#333'}
          size={32}
          name="chat"
          onPress={() => handleSubmit()}
        />
      </Header>
      <Body>
        <Users
          data={users}
          keyExtractor={(user) => String(user.name)}
          renderItem={({item}) => (
            <LUser>
              <Avatar
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk0-483Jw3zN4jn9qWI_HiLR5Hd4bfUs_Rhg&usqp=CAU',
                }}
              />
              <Info>
                <LTitle>{item.name}</LTitle>
                <Description>{'descrição'}</Description>
              </Info>
            </LUser>
          )}
        />
        <Button onPress={() => {}}>
          <TextButton>{'Adicionar Amigo'}</TextButton>
        </Button>
      </Body>
    </Container>
  );

}
