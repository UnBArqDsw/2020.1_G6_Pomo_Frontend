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
} from 'react-native';

import {ItemContainer, ItemTitle, ItemDescription, Container} from './styles';
import {Grid, Row, Col} from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from 'react-native-search-bar';
import {ScrollView} from 'react-native-gesture-handler';

export default function SessionFoco() {
  return (
    <>
      <Container>
        <SearchBar placeholder="Buscar" />
        <Grid>
          <Col>
            <Row>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </Row>
            <Row>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </Row>
            <Row>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </Row>
          </Col>
          <Col>
            <Row>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </Row>
            <Row>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </Row>
            <Row>
              <ItemContainer>
                <Icon name="book" size={30} color="#fff" />
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
              </ItemContainer>
            </Row>
          </Col>
        </Grid>
      </Container>
    </>
  );
}
