import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Home = props => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector(state => state.posts.searchKeyword);
  const [keyword, setKeyword] = useState(searchKeyword);

  const searchHandler = () => {
    dispatch({ type: 'POSTS_SEARCH_REQUESTED', keyword});
    props.navigation.navigate('Posts');
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={styles.searchBar}
        onChangeText={(keyword) => setKeyword(keyword)}
        value={keyword}
      />

      <Button
        title="Search"
        onPress={searchHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    textAlign: 'center',
    width: '100%',
    marginTop: '6%',
  },
  form: {
    padding: '0px 40px'
  },
  input: {
    height: 302,
    padding: '14px 0 14px 28px',
    borderRadius: 34,
    color: '#fff',
    fontFamily: '"Lato", sans-serif',
    fontSize: 18,
    width: '60%',
  }
});

export default Home;
