import React, {useState, useEffect} from 'react';
import {
  Container,
  MenButton,
  TimeText,
  CircleContainer,
  ResetButton,
  ButtonText,
  TaskPickerContainer,
} from './styles';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';
import api from '../../services/api';
import {Picker} from '@react-native-picker/picker';

var global_time = 25;
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(global_time);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState([]);
  const user = useSelector((state) => state.user.profile);
  let time;
  let aux_seconds = seconds;
  let aux_minutes = minutes;

  useEffect(() => {
    async function getItems() {
      try {
        const data = await api.get(`users/${user.id}/tasks`);
        setTasks(data.data);
        // let list = [];
        // for (let task of data.data) {
        //   let item = {
        //     label: task.name,
        //     value: task.name,
        //   };
        //   list.push(item);
        // }

        // setTasks(list);
      } catch (error) {
        alert('Ocorreu um erro ao buscar os items');
      }
    }
    getItems();
  }, [user]);

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
      <TaskPickerContainer>
        {/* <RNPickerSelect
          onValueChange={(value) => setCurrentTask(value)}
          items={tasks}
          placeholder="ola"
        /> */}
        <Picker
          selectedValue={currentTask}
          style={{height: 50, width: '100%'}}
          onValueChange={(itemValue, itemIndex) => setCurrentTask(itemValue)}>
          {/* <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" /> */}
          {Object.values(tasks).map((task) => (
            <Picker.Item label={task.name} value={task.name} />
          ))}
        </Picker>
      </TaskPickerContainer>
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
