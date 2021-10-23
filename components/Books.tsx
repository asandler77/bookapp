import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Carousel from './Carousel';
import {BOOKS} from '../data/books';
import Header from './Header';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*<Header books={BOOKS}/>*/}
      <Carousel books={BOOKS} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
