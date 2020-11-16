import React, {useState} from 'react';
import {Container, MenButton, TimeText} from './styles';
import {Text} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
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
      <AnimatedCircularProgress
        size={200}
        width={8}
        fill={((minutes * 60 + seconds) * 100) / 1500}
        tintColor="#FF0000"
        backgroundColor="#000">
        {() => (
          <MenButton onPress={() => startStopButton()}>
            <TimeText>
              {seconds < 10
                ? `${minutes} : 0${seconds}`
                : `${minutes} : ${seconds}`}
            </TimeText>
          </MenButton>
        )}
      </AnimatedCircularProgress>
    </Container>
  );
}
