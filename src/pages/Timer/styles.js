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

export const MenButton = styled(RectButton)`
  border-radius: 75px;
  border-width: 1px;
  border-style: solid;
  height: 150px;
  width: 150px;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text`
  font-size: 40;
  font-weight: bold;
`;
