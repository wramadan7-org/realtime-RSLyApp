import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

export default function Search() {
  const {dataSearch} = useSelector((state) => state.search);
  return (
    <View>
      <Text>{dataSearch.results}</Text>
    </View>
  );
}
