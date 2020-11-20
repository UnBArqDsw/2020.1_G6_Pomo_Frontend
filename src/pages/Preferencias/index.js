import React, {useState} from 'react';
import Modal from './modal';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/modules/auth/actions';

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

export default function Preferencias() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [modal, setModal] = useState(false);
  const [name, setNewName] = useState(profile.name);

  function handleLogout() {
    dispatch(signOut());
  }
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
        <Name>{name}</Name>
      </Header>
      <Body>
        <Button onPress={() => setModal(true)}>
          <TextButton>{'Editar perfil'}</TextButton>
        </Button>
        <ButtonSair onPress={handleLogout}>
          <TextButton>{'Sair'}</TextButton>
        </ButtonSair>
      </Body>
      <ContainerModal>
        <Modal show={modal} close={() => setModal(false)} user={name} />
      </ContainerModal>
    </Container>
  );
}
