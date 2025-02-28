import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function About() {
  return (
    <ImageBackground
      source={require("../assets/BLACKBG.jpg")}
      style={styles.container}
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>
        Hi! I’m Eduardo Nayawan Jr., a second-year BSCS student at Naga College Foundation, driven by curiosity and a love for tech. I thrive on exploring programming, software development, and innovative solutions, sharpening my skills in algorithms and emerging technologies through hands-on projects. Let’s connect, build, and shape the future of tech—always coding, always learning! 🚀
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