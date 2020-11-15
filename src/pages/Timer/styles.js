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
  font-size: 20;
`;

export const MenButton = styled(RectButton)`
  border-radius: 75;
  border-width: 1px;
  border-style: solid;
  background-color: #ff0000;
  height: 150;
  width: 150;
  align-items: center;
  justify-content: center;
`;
