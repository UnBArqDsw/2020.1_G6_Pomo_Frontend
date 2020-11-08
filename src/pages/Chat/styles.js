import styled from 'styled-components/native';
export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 60px;
  padding-bottom: 5px;
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
