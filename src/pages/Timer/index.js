import React, {useState} from 'react';
import {Container, MenButton} from './styles';
import {Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [pause, setPause] = useState(true);
  const [timer, setTimer] = useState(null);

  function startStopButton() {
    if (pause) {
      setPause(false);
      let aux_seconds = seconds;
      let aux_minutes = minutes;
      console.log(seconds);
      let time = setInterval(() => {
        if (aux_seconds == 0) {
          setSeconds(59);
          aux_seconds = 59;
          aux_minutes--;
          setMinutes(aux_minutes);
        }
        aux_seconds = aux_seconds - 1;

        setSeconds(aux_seconds);
        console.log(aux_seconds);
      }, 100);

      console.log(time);
    } else {
      setPause(true);
    }
  }
  return (
    <Container>
      <AnimatedCircularProgress
        size={250}
        width={8}
        fill={((minutes * 60 + seconds) * 100) / 1500}
        tintColor="#FF0000"
        backgroundColor="#000">
        {() => (
          <MenButton onPress={() => startStopButton()}>
            <Text style={{fontSize: 30}}>{`${minutes}:${seconds}`}</Text>
          </MenButton>
        )}
      </AnimatedCircularProgress>
    </Container>
  );
}
