import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
import useStorage from "../../hooks/useStorage";
import { useIsFocused } from "@react-navigation/native";
import Item from "./components/item";

export default Passwords = () => {
  const { getItem, deleteItem } = useStorage();
  const focused = useIsFocused();

  const [removed, setRemoved] = useState(false);
  const [title, setUpdateTitle] = useState(false);
  const [listPasswords, setListPasswords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loadPasswords = await getItem("@pass");
        setListPasswords(loadPasswords);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [removed, focused]);

  const handleRemove = async (password) => {
    await deleteItem("@pass", password);
    setRemoved(!removed);
    setUpdateTitle(true);
    setTimeout(() => setUpdateTitle(false), 500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBody}>
        <Icon
          style={styles.headerBody.iconUnlock}
          size={50}
          color="#f3f3ff"
          name="enhanced-encryption"
        />
        <Text
          style={!title ? styles.headerBody.title : styles.headerBody.title2}
          secureTextEntry={true}
        >
          {title ? (value = "Senha removida") : "Minhas Senhas"}
        </Text>
      </View>
      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 10, marginBottom: 48 }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <Item item={item} handleRemove={() => handleRemove(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  headerBody: {
    height: 160,
    backgroundColor: "#392DE9",
    justifyContent: "space-between",
    iconUnlock: {
      margin: 20,
      alignSelf: "center",
    },

    title: {
      alignSelf: "flex-start",
      marginLeft: 5,
      margin: -5,
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
      paddingBottom: 10,
    },
    title2: {
      alignSelf: "flex-start",
      marginLeft: 5,
      margin: -5,
      color: "#f00",
      fontSize: 24,
      fontWeight: "bold",
      paddingBottom: 10,
    },
  },

  content: {
    flex: 1,
    backgroundColor: "#f3f3ff",
  },
});
