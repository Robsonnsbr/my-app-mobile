import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export const ModalPassword = ({ password, handleClose }) => {
  const { setItem } = useStorage();
  const [copied, setCopied] = useState(false);
  const [title, setTitle] = useState("Senha gerada");

  const handleCopy = async () => {
    await Clipboard.setStringAsync(password);
    setCopied(true);
    setTitle("Senha copiada com sucesso!");
    setTimeout(() => setCopied(false), 1500);
    setTimeout(() => setTitle("Senha gerada"), 1500);
    setTimeout(() => handleClose(), 2000);
  };

  const handleSave = async () => {
    // console.log(password);
    await setItem("@pass", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.outValue} onLongPress={handleCopy}>
          <Text style={styles.password}>
            {password || "failed to generate"}
          </Text>
        </Pressable>
        <View style={styles.containerButtons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonVoltar]}
            onPress={handleClose}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>
              {copied ? "Copiado!" : "Salvar Senha"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0002",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    height: "content-height",
    padding: 20,
    borderRadius: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  outValue: {
    marginBottom: 15,
    borderRadius: 8,
    width: "95%",
    alignItems: "center",
    backgroundColor: "#000",
  },

  password: {
    padding: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  containerButtons: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  button: {
    width: "48%",
    borderRadius: 8,
    backgroundColor: "#392DE9",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    elevation: 4,
  },

  buttonVoltar: {
    backgroundColor: "#aaa",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },
});
