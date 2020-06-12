import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 90%;
  height: 35px;
  border-color: rgb(247, 171, 33);
  border-radius: 20px;
  border-width: 2px;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 10px;
  color: rgb(247, 171, 33);
`;
