import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View
      style={StyleSheet.text}>Homie</Text>
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2529e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});