import {View, Text, FlatList, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '../config';
import { async } from '@firebase/util';

import NameInput from './NameInput';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  }, 
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '50694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '50694a0f-3da1-471f-bd96-145235e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3161-471f-bd96-145571e29d72',
    title: 'Item',
  },
  {
    id: '50694a0f-3d12-471f-bd96-145571e29d72',
    title: 'Item',
  },
  {
    id: '50694a0f-32a1-471f-bd96-145235e29d72',
    title: 'Item',
  },
]
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);
const Members = ({navigation}) => {

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? 'white' : '#236245';
    const color = item.id === selectedId ? 'black' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#A4E3AA',
    justifyContent: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Members
