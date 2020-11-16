import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  align-items: center;
`;

export const Init = styled.Text`
  font-size: 25;
`;

export const CircleContainer = styled.View`
  background: #fff;
  padding: 15px;
  border-radius: 120px;
  elevation: 90;
  border-width: 1px;
  border-color: #ccc;
`;

export const MenButton = styled(RectButton)`
  border-radius: 75px;
  border-width: 4px;
  border-style: solid;
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
`;
export const StopButton = styled(RectButton)`
  border-style: solid;
  height: 50;

  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text`
  font-size: 49px;
  font-weight: bold;
`;
