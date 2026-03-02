import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    icon: "checkmark-circle",
    title: "Bước 1 Xác định nhu cầu khách hàng",
    desc: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00",
    time: "20/08/2020, 06:00"
  },
  {
    id: "2",
    icon: "people",
    title: "Bạn có khách hàng mới!",
    desc: "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.",
    time: "20/08/2020, 06:00"
  },
  {
    id: "3",
    icon: "people",
    title: "Khách hàng được chia sẻ bị trùng",
    desc: "Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.",
    time: "20/08/2020, 06:00"
  },
  {
    id: "4",
    icon: "people",
    title: "Khách hàng được thêm bị trùng",
    desc: "Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.",
    time: "20/08/2020, 06:00"
  },
  {
    id: "5",
    icon: "checkmark-circle",
    title: "Công việc sắp đến hạn trong hôm nay",
    desc: "Bạn có 17 công việc sắp đến hạn trong hôm nay.",
    time: "20/08/2020, 06:00"
  },
  {
    id: "6",
    icon: "checkmark-circle",
    title: "Công việc đã quá hạn",
    desc: "Bạn có 17 công việc bị quá hạn. Hãy kiểm tra.",
    time: "20/08/2020, 06:00"
  }
];

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Ionicons name={item.icon} size={30} color="#3b5bdb" style={styles.icon} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
};

export default function App() {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 40
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },

  item: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  icon: {
    marginRight: 10
  },

  textContainer: {
    flex: 1
  },

  title: {
    fontWeight: "bold",
    fontSize: 16
  },

  desc: {
    color: "#555",
    marginTop: 3
  },

  time: {
    color: "#888",
    marginTop: 5,
    fontSize: 12
  }
});
