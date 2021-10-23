import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';

import {BOOKS} from '../data/books';
import Book from './Book';
import {BookType} from './types';

interface Props {
  books: BookType[];
}
export default ({books}: Props) => {
  const [filterData, setFilterData] = useState<BookType[]>([]);
  const [masterData, setMasterData] = useState<BookType[]>([]);
  const [bookSearch, setBookSearch] = useState('');
  const [authorSearch, setAuthorSearch] = useState('');

  useEffect(() => {
    getData(books);
  }, []);

  const getData = (books: BookType[]) => {
    setMasterData(books);
    setFilterData(books);
  };

  const searchByBook = (text: string) => {
    if (text) {
      const newData = masterData.filter((item: BookType) => {
        const itemData = item.bookName
          ? item.bookName.toUpperCase()
          : ''.toUpperCase();
        const texData = text.toUpperCase();
        return itemData.indexOf(texData) > -1;
      });
      setFilterData(newData);
      setBookSearch(text);
    } else {
      setFilterData(masterData);
      setBookSearch(text);
    }
  };

  const searchByAuthor = (text: string) => {
    if (text) {
      const newData = masterData.filter((item: BookType) => {
        const itemData = item.author
          ? item.author.toUpperCase()
          : ''.toUpperCase();
        const texData = text.toUpperCase();
        return itemData.indexOf(texData) > -1;
      });
      setFilterData(newData);
      setAuthorSearch(text);
    } else {
      setFilterData(masterData);
      setAuthorSearch(text);
    }
  };
  return (
    <View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <TextInput
          placeholder="search by Book"
          style={styles.textInput}
          underlineColorAndroid="transparent"
          value={bookSearch}
          onChangeText={text => searchByBook(text)}
        />
        <TextInput
          placeholder="search by Author"
          style={styles.textInput}
          underlineColorAndroid="transparent"
          value={authorSearch}
          onChangeText={text => searchByAuthor(text)}
        />
      </View>
      <FlatList
        data={filterData}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => {
          return (
            <View>
              <Book author={item.author} bookName={item.bookName} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 10,
    borderRadius: 1,
    borderColor: 'red',
  },
});
