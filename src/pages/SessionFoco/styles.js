import styled from 'styled-components/native';
import {RectButton, TouchableOpacity} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-color: #cccc;
`;
export const ItemContainer = styled.View`
  background-color:${(props) => `${props.background}`}};
  margin: 5px;
  padding: 12px;
  flex: 1;
  flex-direction: column;
  border-radius: 25px;
  height: ${windowHeight / 5};
  width: 180px;
  justify-content: space-between;
`;
export const ItemTitle = styled.Text`
  font-size: ${windowHeight / 50};
  font-weight: bold;
  color: #fafafa;
`;

export const ItemDescription = styled.Text`
  font-size: ${windowHeight / 60};
  color: #fafafa;
`;

export const ItemGrid = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: ${windowHeight / 25};
  font-weight: bold;
  padding-bottom: 30px;
  color: #333;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
`;

export const MenButton = styled(RectButton)`
  border-radius: 5px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const MoreButton = styled(TouchableOpacity)`
  align-items: center;
`;
