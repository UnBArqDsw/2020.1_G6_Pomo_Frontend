import React, {useState} from 'react';
import {Container, MenButton} from './styles';
import {Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(30);
  const [pause, setPause] = useState(true);

  function startStopButton() {
    setMinutes(20);
  }
  return (
    <Container>
      <AnimatedCircularProgress
        size={250}
        width={8}
        fill={85}
        tintColor="#FF0000"
        backgroundColor="#000">
        {() => (
          <MenButton onPress={() => startStopButton()}>
            <Text>{`${minutes}:${seconds}`}</Text>
          </MenButton>
        )}
      </AnimatedCircularProgress>
    </Container>
  );
}
