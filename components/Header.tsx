import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SCREEN_WIDTH} from '../data/constants';
import {BOOKS} from '../data/books';
import {BookType} from './types';

const cardWidth = SCREEN_WIDTH;

interface Props {
  books: BookType[];
}
export default ({books}: Props) => {
  const [filterData, setFilterData] = useState<BookType[]>([]);
  const [masterData, setMasterData] = useState<BookType[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getData(books);
  });

  const getData = (books: BookType[]) => {
    setMasterData(books);
    setFilterData(books);
  };

  const searchFilter = (text: string) => {
    if (text) {
      const newData = masterData.filter((item: BookType) => {
        const itemData = item.bookName
          ? item.bookName.toUpperCase()
          : ''.toUpperCase();
        const texData = text.toUpperCase();
        return itemData.indexOf(texData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Search the book:</Text>
      <TextInput
        placeholder="search here"
        // style={}
        underlineColorAndroid="transparent"
        value={search}
        onChangeText={text => searchFilter(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  textInput: {},
});
