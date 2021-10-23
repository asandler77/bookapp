import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BookType} from './types';

interface Props {
  book: BookType;
}
export default (props: BookType) => {
  const {author, bookName} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.bookName}</Text>
      <Text style={styles.title}>{props.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: 'blue',
    height: 150,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});
