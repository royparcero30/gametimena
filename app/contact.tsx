import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, Linking } from "react-native";

export default function Contact() {
  const openURL = (URL) => {
    Linking.openURL(URL);
  };

  return (
    <ImageBackground 
      source={require('../assets/tabagwang.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Contact</Text>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => openURL('https://www.facebook.com/roy.parcero')}>
            <Text style={styles.link}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('https://github.com/royparcero30')}>
            <Text style={styles.link}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('mailto:rparcero#gbox.ncf,edu.ph')}>
            <Text style={styles.link}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#fff',
  },
  linksContainer: {
    backgroundColor: 'rgba(80,80,80,0.8)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
});