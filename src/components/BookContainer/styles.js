import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 200px;
  border-radius: 2px;
  background-color: rgb(232, 232, 232);
`;

export const ImageCover = styled.Image`
  width: 130px;
  height: 100%;
`;

export const Description = styled.View`
  padding: 15px;
  width: 210px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  color: rgb(245, 200, 0);
  font-weight: bold;
  font-size: 16px;
`;

export const Title = styled.Text`
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 16px;
  padding: 10px 0px;
`;

export const Classification = styled.Text`
  color: rgb(0, 0, 0);
  font-size: 16px;
`;
