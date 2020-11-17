import styled from 'styled-components/native';

function vectorOfColors() {
  let colors = ['#000', '#FFF', '#FF0000', '#00FF00', '#0000FF'];

  let random = Math.floor(Math.random() * 5);

  return colors[random];
}
export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
`;
export const ItemContainer = styled.View`
  background-color: ${vectorOfColors()};
  margin: 5px;
  padding: 12px;
  flex: 1;
  flex-direction: column;
  border-radius: 25px;
  height: 120px;
  width: 180px;
`;
export const ItemTitle = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fafafa;
`;

export const ItemDescription = styled.Text`
  font-size: 12px;
  color: #fafafa;
`;

export const ItemGrid = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`

  font-size: 30px
  font-weight: bold;
  padding-bottom: 30px;
  color: #333;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
