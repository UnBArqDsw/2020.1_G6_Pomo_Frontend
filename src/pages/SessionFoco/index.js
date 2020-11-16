import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {
  ItemContainer,
  ItemTitle,
  ItemDescription,
  Container,
  ItemGrid,
  Title,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from 'react-native-search-bar';

export default function SessionFoco() {
  return (
    <>
      <Container>
        <Title>{'Sessões'}</Title>
        <SearchBar placeholder="Buscar" />
        <FlatList
          style={{flex: 1}}
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => 1}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <ItemGrid>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Arquitetura e Desenho de Software</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>

              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Testes de Software</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </ItemGrid>
          )}
        />
      </Container>
    </>
  );
}
