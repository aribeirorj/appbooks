import React from 'react';
import {ActivityIndicator, View, Image} from 'react-native';
import {
  Container,
  ImageCover,
  Description,
  Title,
  Classification,
} from './styles';
import Button from '../Button';
import img1 from '../../assets/img.png';

const BookContainer = ({item, navigation}) => {
  return (
    <Container key={item.id}>
      <ImageCover source={img1} />
      <Description>
        <Title>{item.title}</Title>
        <Classification>{item.sub1}</Classification>
        <Button onPress={() => navigation.navigate('Detalhes')} />
      </Description>
    </Container>
  );
};

export default BookContainer;
