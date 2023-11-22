import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import useStorage from "../../hooks/useStorage";
const { getItem, deleteItem } = useStorage();

export default Passwords = () => {
  const [removed, setRemoved] = useState(false);
  const [hidePass, setUpdateState] = useState(false);
  const [title, setUpdateTitle] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [atualizar, setAtualizar] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const passwordsDB = await getItem("@pass");
        setPasswords(passwordsDB);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [removed, atualizar]);

  const handleRemove = async (password) => {
    setRemoved(!removed);
    await deleteItem("@pass", password);
    setUpdateTitle(true);
    setTimeout(() => setUpdateTitle(false), 1500);
  };

  const handleEntrarNaTela = () => {
    setAtualizar((prevState) => prevState + 1);
  };

  return (
    <View style={styles.container}>
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
        {passwords.map((password, index) => (
          <Pressable
            key={index}
            style={styles.content.outValue}
            onLongPress={() => handleRemove(password)}
          >
            <TextInput
              editable={false}
              style={styles.content.input}
              secureTextEntry={hidePass ? true : false}
              value={password}
              right={
                <TextInput.Icon
                  iconColor="#fff"
                  icon={hidePass ? "eye-off" : "eye"}
                  onPress={() => setUpdateState(!hidePass)}
                />
              }
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    alignItems: "center",
    gap: 10,
    // justifyContent: "top", //não é possível utilizar o top em react-native
    marginTop: 50,
    backgroundColor: "#f3f3ff",
    outValue: {
      width: "95%",
      borderRadius: 8,
      height: 44,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      justifyContent: "space-between",
      width: "95%",
      height: 44,
      backgroundColor: "#000",
      borderRadius: 8,
      fontSize: 24,
      color: "#f00",
      placeholderTextColor: "green",
      underlineColorAndroid: "green",
    },
  },
});
