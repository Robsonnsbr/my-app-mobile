import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

export default Passwords = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBody}>
        <Icon
          style={styles.headerBody.iconUnlock}
          size={50}
          color="#f3f3ff"
          name="enhanced-encryption"
        />
        <Text style={styles.headerBody.title}>Minhas Senhas</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.content}>Caracteres</Text>
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
    height: 120,
    backgroundColor: "#392DE9",
    justifyContent: "space-between",
    iconUnlock: {
      margin: 20,
      alignSelf: "center",
    },

    title: {
      alignSelf: "flex-start",
      marginLeft: 5,
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
      paddingBottom: 10,
    },
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "top",
    marginTop: 50,
    backgroundColor: "#f3f3ff",
  },
});
