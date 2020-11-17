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
import SearchBar from 'react-native-search-bar';

export default function SessionFoco() {
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
          placeholder="Buscar"
          placeholderTextColor="#000"
          color="#000"
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
