import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Title,
  Header,
  Avatar,
  Name,
  Body,
  Button,
  TextButton,
} from './styles';
export default function Preferencias() {
  const [find, setFind] = useState();

  return (
    <Container>
      <Title>{'Prefêrencias'}</Title>
      <Header>
        <Avatar
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk0-483Jw3zN4jn9qWI_HiLR5Hd4bfUs_Rhg&usqp=CAU',
          }}
        />
        <Name>{'Andre Eduardo'}</Name>
      </Header>
      <Body>
        <Button>
          <TextButton>{'Editar perfil'}</TextButton>
        </Button>
      </Body>
    </Container>
  );
}
