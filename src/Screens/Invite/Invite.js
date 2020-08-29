import React from 'react';
import { View, FlatList } from 'react-native';
import { UserItem } from './Components';
import * as styles from './styles';
import mockData from './mockData';

const Invite = () => {
  const renderItem = ({ item }) => (
    <UserItem name={item.name} status={item.status} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
      />
    </View>
  );
};

export default Invite;
