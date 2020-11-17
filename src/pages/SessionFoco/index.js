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
  return (
    <>
      <Container>
        <Title>{'Sessões'}</Title>
        <SearchBar
          placeholder="Buscar"
          placeholderTextColor="#000"
          inputStyle={{color: '#000'}}
        />
        <FlatList
          style={{marginTop: 15}}
          data={[1, 2, 3, 4, 5]}
          keyExtractor={(item) => 1}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <ItemGrid>
              <ItemContainer>
                <IconContainer>
                  <Icon name="book" size={25} color="#fff" />
                  <Icon name="more-horizontal" size={25} color="#fff" />
                </IconContainer>
                <ItemTitle>Arquitetura e Desenho de Software</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>

              <ItemContainer>
                <IconContainer>
                  <Icon name="book" size={25} color="#fff" />
                  <Icon name="more-horizontal" size={25} color="#fff" />
                </IconContainer>
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
