import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const SearchBar = (props) => {

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
      />
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    margin: 5,
    borderRadius: 10,
  },
});
