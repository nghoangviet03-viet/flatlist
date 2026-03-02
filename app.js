import React from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', title: 'Bước 1 Xác định nhu cầu khách hàng' },
  { id: '2', title: 'Bạn có khách hàng mới!' },
  { id: '3', title: 'Khách hàng được chia sẻ bị trùng' },
  { id: '4', title: 'Khách hàng được thêm bị trùng' },
  { id: '5', title: 'Công việc sắp đến hạn trong hôm nay' },
  { id: '6', title: 'Công việc đã quá hạn' },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  title: {
    fontSize: 16
  }
});
