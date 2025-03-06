import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/me.jpg")}
      style={styles.container}
      resizeMode="cover"
      
    >
      <View style={styles.overlay} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hi! my name is ROY B. PARCERO., a second-year BSCS student OF Naga College Foundation, I'm a dedicated student with a dream to be a successful man in the future.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay with 50% opacity
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 24,
  },
});
