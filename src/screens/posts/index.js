import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { View, Text, Button, TextInput, Dimensions } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);

const PostItem = (props) => <Text>{props.name}</Text>;

const Posts = props => {
  const searchKeyword = useSelector(state => state.posts.searchKeyword);
  const [text, setText] = useState(searchKeyword);
  const posts = useSelector(state => state.posts, shallowEqual);

  return (
    posts.isFetching ?
      <Text>Is Fetching</Text> :
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Text>Posts Screen ({searchKeyword})</Text>
         <Button
           title="Go to Home"
           onPress={() => props.navigation.navigate('Home')}
         />
         <Text>{posts ? posts.list.map((post, index) => <PostItem name={post.name} key={index} />) : 'NO POSTS'}</Text>
       </View>
  );
}

Posts.navigationOptions = {
  headerLeft: (
    <>
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
        title="search"
        iconName="ios-search"
        onPress={() => alert('search')}
        style= {{
        }}
      />
      </HeaderButtons>
      <TextInput
        placeholder="this is placeholder"
        placeholder="search"
        placeholderTextColor= '#0d47a1'
        style={{
          height: 30,
          paddingLeft: 10,
          paddingRight: 10,
          width: Dimensions.get('window').width-58,
          borderColor: 'black',
          backgroundColor: '#e3f2fd'
      }} />
    </>
  )
};

export default Posts;
