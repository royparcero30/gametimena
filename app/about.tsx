import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/BLACKBG.jpg")}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Hi! my name is ROY B. PARCERO., a second-year BSCS student OF Naga College Foundation, Im dedicated student with a dream to be a successfull man in the future.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});