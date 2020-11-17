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
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {SearchBar} from 'react-native-elements';
export default function SessionFoco() {
  const [search, setSearch] = useState('');
  function vectorOfColors() {
    let colors = ['#000', '#ccc', '#FF0000', '#00FF00', '#0000FF'];

    let random = Math.floor(Math.random() * 5);

    return colors[random];
  }
  return (
    <>
      <Container>
        <Title>{'Sessões'}</Title>
        <SearchBar
          placeholder="Type Here..."
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
