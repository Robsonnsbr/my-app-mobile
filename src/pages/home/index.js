import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import logo from "../../../src/assets/logo.png";
import { ModalPassword } from "../../../src/components/modal";

const wordLowerCase = "abcdefghijklmnopqrstuvwxyz";
const wordUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const specChars = "!@#$*_+=;|:,<.>?";
const space = " ";

const charset = [
  ...wordLowerCase,
  ...wordUpperCase,
  ...space,
  ...nums,
  ...specChars,
].join("");

export default Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [size, setSize] = useState(8);
  const [password, setPassword] = useState("");
  const [modalView, setModalView] = useState(false);

  const changeStyleButton = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      setIsActive(isActive);
    }, 100);
  };

  const generatePassword = (maxLength) => {
    const charsetLength = charset.length;

    const passwordGenerated = Array.from({ length: maxLength }, () =>
      charset.charAt(Math.floor(Math.random() * charsetLength))
    ).join("");
    setPassword(passwordGenerated);
    setModalView(true);
  };

  const handlePress = () => {
    changeStyleButton();
    generatePassword(size);
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalView} animationType="fade" transparent={true}>
        <ModalPassword
          password={password}
          handleClose={() => setModalView(false)}
        />
      </Modal>
      <View style={styles.content}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>{size} Caracteres</Text>
        <View style={styles.area}>
          <Slider
            style={{ height: 20 }}
            minimumValue={8}
            maximumValue={24}
            value={size}
            onValueChange={(value) => setSize(parseInt(value))}
            minimumTrackTintColor="#FF2626"
            maximumTrackTintColor="#008577"
            thumbTintColor="#008577"
          />
        </View>
        <TouchableOpacity
          style={[styles.button, isActive && styles.activeButton]}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f3f3ff",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "top", //não é possível utilizar o top em react-native
    marginTop: 50,
  },

  logo: {
    marginBottom: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  area: {
    margin: 14,
    width: "80%",
    borderRadius: 8,
    padding: 14,
    backgroundColor: "#FFF",
    alignContent: "center",
    justifyContent: "center",
  },

  button: {
    width: "80%",
    borderRadius: 8,
    backgroundColor: "#392DE9",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },

  activeButton: {
    backgroundColor: "#392D",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFF",
  },
});
