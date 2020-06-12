import React from 'react';
import {
  StatusBar,
  ScrollView,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';
import {
  Area,
  Container,
  Text,
  ImageCover,
  Description,
  Title,
  TitleTop,
  Label,
  ContainerValue,
  TextValue,
} from './styles';
import Button from '../../components/Button';
import img1 from '../../assets/img.png';

const BookDetails = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(0, 0, 0)" />
      <Area>
        <TitleTop>Cidade Dos Ossos</TitleTop>
        <ScrollView style={{width: '100%', padding: '10%'}}>
          <Container>
            <ImageCover source={img1} />
            <Description>
              <Label>Título original</Label>
              <Title>CIDADE DOS OSSOS</Title>
              <Label>Gênero</Label>
              <Title>INFANTO JUVENIL</Title>
              <Label>Autor</Label>
              <Title>JK ROWLING</Title>
              <Label>Origem</Label>
              <Title>INGLATERRA</Title>
            </Description>
          </Container>
          <Label>Descrição</Label>
          <Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing
          </Text>
          <Label>Prévia</Label>
          <Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and
          </Text>

          <Label>Prévia</Label>
          <Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and
          </Text>
          <Button onPress={() => navigation.navigate('HOME')}>
            DOWLOAD PRÉVIA
          </Button>
          <Label>E-book Kindle</Label>
          <ContainerValue>
            <TextValue>25,90</TextValue>
            <Text>COMPRA NO DÉBITO</Text>
          </ContainerValue>
        </ScrollView>
      </Area>
    </>
  );
};

export default BookDetails;
