import React, {useState} from 'react';
import {
  Container,
  MenButton,
  TimeText,
  CircleContainer,
  ResetButton,
  ButtonText,
} from './styles';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

var global_time = 10; // valor vira do backend
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(global_time);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(0);
  let time;
  let aux_seconds = seconds;
  let aux_minutes = minutes;

  function startStopButton(stop) {
    setStart(stop);

    if (stop) {
      time = setInterval(() => {
        if (aux_seconds == 0) {
          if (aux_minutes == 0) {
            clearInterval(timer);
            return;
          }
          setSeconds(60);
          aux_seconds = 60;
          aux_minutes--;
          setMinutes(aux_minutes);
        }
        aux_seconds = aux_seconds - 1;

        setSeconds(aux_seconds);
      }, 1000);

      setTimer(time);
    } else {
      clearInterval(timer);
    }
  }
  return (
    <Container>
      <CircleContainer>
        <AnimatedCircularProgress
          size={200}
          rotation={0}
          width={8}
          fill={((minutes * 60 + seconds) * 100) / (global_time * 60)}
          tintColor="#FF0000"
          backgroundColor="#b4b4b4">
          {() => (
            <MenButton onPress={() => startStopButton(!start)}>
              <TimeText>
                {minutes >= 10 && seconds < 10
                  ? `${minutes} : 0${seconds}`
                  : minutes < 10 && seconds < 10
                  ? `0${minutes} : 0${seconds}`
                  : minutes >= 10 && seconds >= 10
                  ? `${minutes} : ${seconds}`
                  : minutes < 10 && seconds >= 10
                  ? `0${minutes} : ${seconds}`
                  : null}
              </TimeText>
            </MenButton>
          )}
        </AnimatedCircularProgress>
      </CircleContainer>
      <ResetButton
        onPress={() => {
          setMinutes(25);
          setSeconds(0);
        }}>
        <ButtonText>{'Resetar'}</ButtonText>
      </ResetButton>
    </Container>
  );
}
