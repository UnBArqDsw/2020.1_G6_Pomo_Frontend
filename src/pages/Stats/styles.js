import styled from 'styled-components/native';

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
  border-radius: 26px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const LTitle = styled.View`
  padding: 10px 20px;
  align-self: center;
`;

export const Info = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 15px;
  color: #333;
`;

export const TitleOfEachChart = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 20px;
  font-weight: bold;
  color: #828282;
`;
