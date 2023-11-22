import React, { useEffect, useState } from "react";
import { StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

export default Item = ({ item, handleRemove }) => {
  const [hidePass, setUpdateState] = useState(true);
  return (
    <Pressable style={styles.outValue} onLongPress={handleRemove}>
      <TextInput
        editable={false}
        style={styles.input}
        secureTextEntry={hidePass ? true : false}
        value={item}
        right={
          <TextInput.Icon
            iconColor="#fff"
            icon={hidePass ? "eye-off" : "eye"}
            onPress={() => setUpdateState(!hidePass)}
          />
        }
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outValue: {
    borderRadius: 8,
    height: 44,
    marginBottom: 10,
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
});
