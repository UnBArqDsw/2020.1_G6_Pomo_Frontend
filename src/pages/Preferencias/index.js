import React, {useState} from 'react';
import Modal from './modal';
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
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Title>{'Preferências'}</Title>
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
        {console.log('#cecc')}
        <Button onPress={() => setModal(true)}>
          <TextButton>{'Editar perfil'}</TextButton>
        </Button>
        <Modal show={modal} close={() => setModal(false)} />
      </Body>
    </Container>
  );
}
