import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
`;


export const Graphics = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const LGraphics = styled.View`
  background: #909090;
  border-radius: 26px;
  padding: 70px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const LTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #333;
  align-self: center;
`;

export const Info = styled.View`
  margin-left: 15px;
  flex: 1;
`;
export const Description = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`;
