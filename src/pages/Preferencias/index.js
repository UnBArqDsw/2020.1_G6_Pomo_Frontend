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
  ButtonSair,
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
              'https://raw.githubusercontent.com/UnBArqDsw/2020.1_G6_Pomo/master/docs/img/andre.png',
          }}
        />
        <Name>{test}</Name>
      </Header>
      <Body>
        <Button onPress={() => setModal(true)}>
          <TextButton>{'Editar perfil'}</TextButton>
        </Button>
        <ButtonSair onPress={() => setModal(true)}>
          <TextButton>{'Sair'}</TextButton>
        </ButtonSair>
      </Body>
      <ContainerModal>
        <Modal show={modal} close={() => setModal(false)} user={test} />
      </ContainerModal>
    </Container>
  );
}
