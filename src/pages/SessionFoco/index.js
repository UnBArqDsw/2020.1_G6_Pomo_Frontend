import React, {useEffect, useState, useCallback} from 'react';
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
import IconPickedFromUser from 'react-native-vector-icons/AntDesign';
import {SearchBar} from 'react-native-elements';
import NewTask from '../../components/NewTask';
import EditTask from '../../components/EditTask';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../services/api';
import {useFocusEffect} from '@react-navigation/native';

export default function SessionFoco() {
  const [search, setSearch] = useState('');
  const [isVisibleNewTask, setIsVisibleNewTask] = useState(false);
  const [isVisibleEditTask, setIsVisibleEditTask] = useState(false);
  const [tasks, setTasks] = useState('');
  const user = useSelector((state) => state.user.profile);

  // useEffect(() => {
  //   async function loadTasks() {
  //     const response = await api.get(`users/${user.id}/tasks`);
  //     console.log(response);
  //     setTasks(response.data);
  //   },
  //   loadTasks();
  // }, []);

  useEffect(() => {
    async function getItems() {
      try {
        const data = await api.get(`users/${user.id}/tasks`);
        setTasks(data.data);
      } catch (error) {
        alert('Ocorreu um erro ao buscar os items');
      }
    }
    getItems();
  }, [user]);

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
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={(task) => (
            <ItemGrid>
              <ItemContainer background={task.item.color}>
                <IconContainer>
                  <IconPickedFromUser
                    name={task.item.icon}
                    size={windowHeight / 30}
                    color="#fff"
                  />
                  <MoreButton onPress={() => setIsVisibleEditTask(true)}>
                    <Icon
                      name="more-horizontal"
                      size={windowHeight / 30}
                      color="#fff"
                    />
                  </MoreButton>
                </IconContainer>
                <ItemTitle>{task.item.name}</ItemTitle>
                <ItemDescription>{task.item.description}</ItemDescription>
              </ItemContainer>
            </ItemGrid>
          )}
        />
      </Container>
    </>
  );
}
