import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 220px;
  border-radius: 2px;
`;

export const ContainerValue = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  border-radius: 2px;
  background-color: rgb(232, 232, 232);
`;

export const Area = styled.SafeAreaView`
  height: 100%;
  align-items: center;
`;

export const ImageCover = styled.Image`
  width: 130px;
  height: 100%;
`;

export const TitleTop = styled.Text`
  color: rgb(245, 200, 0);
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding: 2px;
`;

export const Title = styled.Text`
  font-size: 12px;
  padding: 5px 0px;
`;

export const Description = styled.View`
  padding: 15px;
  width: 210px;
`;

export const Text = styled.Text`
  font-size: 12px;
`;

export const TextValue = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Classification = styled.Text`
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 16px;
`;
