import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";

export default function Hobbies() {
  return (
    <ImageBackground 
      source={require('../assets/tabagwang.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Hobbies</Text>


        <View style={styles.hobbyContainer}>
          <Image 
            source={require('../assets/hobbies.jpg')}  
            style={styles.hobbyImage}
            resizeMode="cover"
          />
          <Text style={styles.hobbyTitle}>PLAYING BASKETBALL</Text>
          <Text style={styles.hobbyDescription}>
            BASKETBALL is my hobby to releast my stress and to make an exercise daily , iloved playing basketball.
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // Changed from contentContainer to scrollContainer for ScrollView
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#fff',
  },
  hobbyContainer: {
    backgroundColor: 'rgba(80,80,80,0.8)', // greyish tone
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  hobbyImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  hobbyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  hobbyDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
});