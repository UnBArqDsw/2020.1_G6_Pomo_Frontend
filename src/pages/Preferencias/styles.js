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

  font-size: 30px
  font-weight: bold;
  padding-bottom: 30px;
  color: #333;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #cccc;
`;
export const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background: #cccc;
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

  background-color: #ccc;
  justify-content: center;
  align-items: center;
  height: 46px;
`;
export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const ContainerModal = styled.View`
  align-items: center;

  justify-content: center;
`;
export const ModalButton = styled(RectButton)`
  align-self: stretch;
  border-radius: 23px;
  border-width: 1px;
  border-style: solid;
  margin-top: 200px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  height: 46px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 20px;
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
export const ButtonSair = styled(RectButton)`
  align-self: stretch;
  border-radius: 23px;

  background-color: #ca054d;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  height: 46px;
`;
