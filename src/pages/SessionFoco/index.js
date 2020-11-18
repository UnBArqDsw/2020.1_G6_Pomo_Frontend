import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {
  ItemContainer,
  ItemTitle,
  ItemDescription,
  Container,
  ItemGrid,
  Title,
  IconContainer,
  Header,
  MenButton,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {SearchBar} from 'react-native-elements';
import NewTask from '../../components/NewTask';

export default function SessionFoco() {
  const [search, setSearch] = useState('');
  const [isVisibleNewTask, setIsVisibleNewTask] = useState(false);
  function vectorOfColors() {
    let colors = [
      '#2a2928',
      '#b8b8b8',
      '#ff4d4d',
      '#91a06e',
      '#3957f9',
      '#d2e235',
      '#912ae2',
      '#ee6d00',
      '#28beff',
      '#ff01be',
    ];

    let random = Math.floor(Math.random() * colors.length);

    return colors[random];
  }
  return (
    <>
      <Container>
        <Header>
          <Title>{'Sessões de Foco'}</Title>
          <MenButton onPress={() => setIsVisibleNewTask(true)}>
            <Icon
              color={'#e91e63'}
              size={35}
              name="plus-circle"
              onPress={() => {}}
            />
          </MenButton>
        </Header>
        <SearchBar
          placeholder="Buscar"
          platform="android"
          onChangeText={(value) => setSearch(value)}
          value={search}
          containerStyle={{
            borderRadius: 100,
            height: 50,
            paddingTop: -10,
            marginBottom: 10,
          }}
        />
        <NewTask
          isVisible={isVisibleNewTask}
          onCancel={() => setIsVisibleNewTask(false)}
        />

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          keyExtractor={(item) => 1}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={() => (
            <ItemGrid>
              <ItemContainer background={vectorOfColors()}>
                <IconContainer>
                  <Icon name="book" size={25} color="#fff" />
                  <Icon name="more-horizontal" size={25} color="#fff" />
                </IconContainer>
                <ItemTitle>Arquitetura e Desenho de Software</ItemTitle>
                <ItemDescription>Descrição</ItemDescription>
              </ItemContainer>
            </ItemGrid>
          )}
        />
      </Container>
    </>
  );
}
