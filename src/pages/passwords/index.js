import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { Icon } from "react-native-elements";
import useStorage from "../../hooks/useStorage";
const { getItem, deleteItem } = useStorage();

export default Passwords = () => {
  const [copied, setCopied] = useState(false);
  const [hidePass, setUpdateState] = useState(false);
  const [title, setTitle] = useState("Senha gerada");

  const handleCopy = async () => {
    console.log("copiei");
    // await Clipboard.setStringAsync(password);
    // setCopied(true);
    // setTitle("Senha copiada com sucesso!");
    // setTimeout(() => setCopied(false), 1500);
    // setTimeout(() => setTitle("Senha gerada"), 1500);
    // setTimeout(() => handleClose(), 2000);
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
        <Text style={styles.headerBody.title} secureTextEntry={true}>
          Minhas Senhas
        </Text>
      </View>
      <View style={styles.content}>
        <Pressable style={styles.content.outValue} onLongPress={handleCopy}>
          <TextInput
            onLongPress={handleCopy}
            style={styles.content.input}
            autoCapitalize="none"
            returnKeyType="next"
            secureTextEntry={hidePass ? true : false}
            editable={false}
            mode="outlined"
            outlineColor="transparent"
            activeOutlineColor={false}
            right={
              <TextInput.Icon
                iconColor="#fff"
                icon="eye"
                onPress={() => setUpdateState(!hidePass)}
              />
            }
          >
            <Text style={{ color: "#fff" }}>TESTE</Text>
          </TextInput>
        </Pressable>
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
  },

  content: {
    flex: 1,
    alignItems: "center",
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
      flex: 1,
      // alignItems: "center",

      justifyContent: "space-between",
      width: "95%",
      backgroundColor: "#000",
      borderRadius: 8,
      fontSize: 24,
      paddingLeft: 0,
      paddingRight: 0,
      color: "#fff",
    },
  },
});
