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

  const dispatch = useDispatch();
  function handleSubmit() {
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
                  uri: item.avatar_url,
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
