import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const Skills: React.FC = (): JSX.Element => {
  const [skill, setSkill] = useState<string>("");

  const handleInputChange = (text: string) => {
    setSkill(text);
  };

  const handleSubmit = () => {
    console.log("Skill entered:", skill); // You can handle the submitted skill here
    setSkill(""); // Optionally reset the input field after submission
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Skills</Text>

      {/* TextInput for skill entry */}
      <TextInput
        style={styles.input}
        placeholder="COMPUTER LATERATE"
        value={skill}
        onChangeText={handleInputChange}
      />

      {/* Button to submit skill */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default Skills;
