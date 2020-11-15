import React from 'react';
import {Container, Init} from './styles';
import {Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function Timer() {
  return (
    <Container>
      <AnimatedCircularProgress
        size={250}
        width={8}
        fill={85}
        tintColor="#FF0000"
        backgroundColor="#000">
        {(fill) => <Text style={{fontSize: 20}}>19:20</Text>}
      </AnimatedCircularProgress>
    </Container>
  );
}
