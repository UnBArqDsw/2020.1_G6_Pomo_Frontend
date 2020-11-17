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
  ContainerModal,
  Form,
  Input,
} from './styles';
import {Keyboard} from 'react-native';
export default function Preferencias() {
  const [modal, setModal] = useState(false);
  const [test, setNewName] = useState('Andre Eduardo');
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
        <Name>{test}</Name>
      </Header>
      <Body>
        <Button onPress={() => setModal(true)}>
          <TextButton>{'Editar perfil'}</TextButton>
        </Button>
      </Body>
      <ContainerModal>
        <Modal show={modal} close={() => setModal(false)} user={test} />
      </ContainerModal>
    </Container>
  );
}
