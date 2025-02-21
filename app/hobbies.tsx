import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const Hobbies: React.FC = (): JSX.Element => {
  const [hobby, setHobby] = useState<string>("");

  const handleInputChange = (text: string) => {
    setHobby(text);
  };

  const handleSubmit = () => {
    console.log("Basketball :",  hobby); // You can handle the submitted hobby here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Hobbies</Text>
      
      {/* TextInput for hobby entry */}
      <TextInput
        style={styles.input}
        placeholder="Playing Basketball"
        value={hobby}
        onChangeText={handleInputChange}
      />
      
      {/* Button to submit hobby */}
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

export default Hobbies;
