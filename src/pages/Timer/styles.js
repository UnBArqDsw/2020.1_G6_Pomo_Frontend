import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  align-items: center;
  justify-content: space-between;
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
export const ResetButton = styled(RectButton)`
  align-self: stretch;
  border-radius: 23px;
  border-width: 1px;
  border-style: solid;
  margin-bottom: 20px;
  background-color: #cccc;
  justify-content: center;
  align-items: center;
  height: 46px;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
`;
export const TimeText = styled.Text`
  font-size: 49px;
  font-weight: bold;
`;
