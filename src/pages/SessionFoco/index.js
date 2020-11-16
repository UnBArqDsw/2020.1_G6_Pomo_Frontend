import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Animated,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  ItemContainer,
  ItemTitle,
  ItemDescription,
  Container,
  ItemGrid,
} from './styles';
import {Grid, Row, Col} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from 'react-native-search-bar';
import {ScrollView} from 'react-native-gesture-handler';

export default function SessionFoco() {
  return (
    <>
      <Container>
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
