import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 10px;
`;
export const ItemContainer = styled.View`
  background-color: #7159c1;
  margin: 5px;
  padding: 15px;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 25px;
  height: 120px;
  width: 180px;
`;
export const ItemTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fafafa;
`;

export const ItemDescription = styled.Text`
  font-size: 12px;
  color: #fafafa;
`;

export const List = styled.FlatList`
  font-size: 18px;
  color: #fafafa;
`;
export const ItemGrid = styled.View`
  flex: 1;
  padding: 10px;
  flex-direction: row;
`;
