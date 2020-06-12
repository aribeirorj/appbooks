import React from 'react';
import {FlatList, View, SafeAreaView, StatusBar, Text} from 'react-native';
import BookContainer from '../../components/BookContainer';

import {Area, TitleTop} from './styles';

const Books = (props) => {
  let list = [
    {id: 1, title: 'Harry Potte - Livro 1', sub1: 'INFANTO JUVENIL 12 ANOS'},
    {id: 2, title: 'Harry Potte - Livro 2', sub1: 'INFANTO JUVENIL 12 ANOS'},
    {id: 3, title: 'Harry Potte - Livro 3', sub1: 'INFANTO JUVENIL 12 ANOS'},
    {id: 4, title: 'Harry Potte - Livro 4', sub1: 'INFANTO JUVENIL 12 ANOS'},
  ];
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(0, 0, 0)" />
      <Area>
        <TitleTop>Popular</TitleTop>
        <FlatList
          data={list}
          renderItem={({item}) => <BookContainer item={item} {...props} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </Area>
    </>
  );
};

export default Books;
