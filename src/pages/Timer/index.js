import React, {useState} from 'react';
import {Container, MenButton, TimeText, CircleContainer} from './styles';
import {Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {TouchableOpacity} from 'react-native-gesture-handler';

var global_time = 10; // valor vira do backend
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(global_time);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(null);
  var time;
  function startStopButton() {
    console.log(start);
    setStart(true);
    console.log(start);

    let aux_seconds = seconds;
    let aux_minutes = minutes;
    time = setInterval(() => {
      if (aux_minutes == 0 && aux_seconds == 0) {
        setMinutes(25);
        setSeconds(1);
        clearInterval(time);
      }
      if (aux_seconds == 0) {
        setSeconds(60);
        aux_seconds = 60;
        aux_minutes--;
        setMinutes(aux_minutes);
      }
      aux_seconds = aux_seconds - 1;
      if (start == true) {
        clearInterval(time);
        console.log('clearinterval');
      }
      setSeconds(aux_seconds);
    }, 1000);
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
            <MenButton onPress={() => startStopButton()}>
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
    </Container>
  );
}
