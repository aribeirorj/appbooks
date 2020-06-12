import React from 'react';
import {Button, StatusBar, Text, View, SafeAreaView} from 'react-native';
import {Container, Area, Title} from './styles';

const Main = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(0, 0, 0)" />
      <Area>
        <Container></Container>
      </Area>
    </>
  );
};

export default Main;
