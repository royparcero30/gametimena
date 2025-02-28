import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/BLACKBG.jpg")}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <View style={styles.circlePic}>
          <Image
            source={require("../assets/POGI.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>
          Welcome to my expo-Website
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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