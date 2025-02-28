import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";

export default function Hobbies() {
  return (
    <ImageBackground 
      source={require('../assets/BLACKBG.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Hobbies</Text>

        <View style={styles.hobbyContainer}>
          <Image 
            source={require('../assets/GAMING.jpg')}  
            style={styles.hobbyImage}
            resizeMode="cover"
          />
          <Text style={styles.hobbyTitle}>🎮 Gaming</Text>
          <Text style={styles.hobbyDescription}>
            I love diving into strategy games and RPGs, where quick thinking and teamwork shine. Whether conquering virtual worlds or solving puzzles, gaming sharpens my focus and reminds me that even setbacks can level up resilience.
          </Text>
        </View>

        <View style={styles.hobbyContainer}>
          <Image 
            source={require('../assets/READING.jpg')}  
            style={styles.hobbyImage}
            resizeMode="cover"
          />
          <Text style={styles.hobbyTitle}>📚 Reading</Text>
          <Text style={styles.hobbyDescription}>
            Sci-fi novels and tech journals are my go-to escapes. They spark creativity and offer fresh perspectives—like how futuristic ideas in books often mirror real-world tech innovations I study.
          </Text>
        </View>

        <View style={styles.hobbyContainer}>
          <Image 
            source={require('../assets/CODING.jpg')}  
            style={styles.hobbyImage}
            resizeMode="cover"
          />
          <Text style={styles.hobbyTitle}>💻 Programming</Text>
          <Text style={styles.hobbyDescription}>
            Coding is my playground! From building simple apps to tinkering with algorithms, I enjoy turning abstract ideas into functional projects. It’s where logic meets imagination—and coffee fuels the magic.
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