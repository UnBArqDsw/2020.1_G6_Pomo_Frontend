import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 60px;
`;
export const Form = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 20px;
  padding: 0 15px;
  border: 1px solid #999;
`;
export const Chats = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const LMenssage = styled(RectButton)`
  background: #e1e1e1;

  padding: 20px 24px;
  margin-bottom: 4px;

  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  height: 62px;
  width: 62px;
  border-radius: 31px;
  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px
  font-weight: bold;
  color: #333;
`;
export const LastMenssage = styled.Text`
  font-size: 16px;
  color: #666;
  margin-top: 2px;
`;
