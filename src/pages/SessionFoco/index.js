import React, {useEffect, useState} from 'react';
import {FlatList, Dimensions, TouchableOpacity} from 'react-native';

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
  MoreButton,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {SearchBar} from 'react-native-elements';
import NewTask from '../../components/NewTask';
import EditTask from '../../components/EditTask';

export default function SessionFoco() {
  const [search, setSearch] = useState('');
  const [isVisibleNewTask, setIsVisibleNewTask] = useState(false);
  const [isVisibleEditTask, setIsVisibleEditTask] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
              size={windowHeight / 20}
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

        <EditTask
          isVisible={isVisibleEditTask}
          onCancel={() => setIsVisibleEditTask(false)}
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
                  <Icon name="book" size={windowHeight / 30} color="#fff" />
                  <MoreButton onPress={() => setIsVisibleEditTask(true)}>
                    <Icon
                      name="more-horizontal"
                      size={windowHeight / 30}
                      color="#fff"
                    />
                  </MoreButton>
                </IconContainer>
                <ItemTitle>Arquitetura e Desenho de Software</ItemTitle>
                <ItemDescription>DescriçãoDescrição ...</ItemDescription>
              </ItemContainer>
            </ItemGrid>
          )}
        />
      </Container>
    </>
  );
}
