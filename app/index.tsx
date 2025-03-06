import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.circlePic}>
          <Image
            source={require("../assets/tabagwang.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>
          Welcome to my expo-Website
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333", // Dark gray background
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circlePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
