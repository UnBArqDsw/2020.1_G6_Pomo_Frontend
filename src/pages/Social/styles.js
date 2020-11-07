import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 15px;
  color: #333;
`;

export const MenButton = styled(RectButton)`
  align-self: stretch;
  border-radius: 23px;
  border-width: 1px;
  border-style: solid;

  height: 38px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #cccc;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: flex-end;

  padding-bottom: 30px;
`;
export const Button = styled(RectButton)`
  align-self: stretch;
  border-radius: 23px;
  border-width: 1px;
  border-style: solid;
  background-color: #cccc;
  justify-content: center;
  align-items: center;
  height: 46px;
`;
export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
`;

export const Users = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const LUser = styled.View`
  background: #e1e1e1;
  border-radius: 6px;
  padding: 10px 15px;
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
`;

export const Avatar = styled.Image`
  height: 52px;
  width: 52px;
  border-radius: 31px;
  background: #eee;
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
