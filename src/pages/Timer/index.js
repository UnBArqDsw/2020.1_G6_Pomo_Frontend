import React, {useState, useEffect} from 'react';
import {
  Container,
  MenButton,
  TimeText,
  CircleContainer,
  StopButton,
} from './styles';
import {Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(4);
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
      }, 10);

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
          width={8}
          fill={1}
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
      <StopButton
        onPress={() => {
          setMinutes(25);
          setSeconds(0);
        }}>
        <TimeText>{'resete'}</TimeText>
      </StopButton>
    </Container>
  );
}
