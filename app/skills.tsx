import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from "react-native";

export default function Skills() {
  return (
    <ImageBackground 
      source={require('../assets/BLACKBG.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>My Skills</Text>
        
        <View style={styles.skillContainer}>
          <Image 
            source={require('../assets/GRAPHIC.jpg')}
            style={styles.skillImage}
            resizeMode="cover"
          />
          <Text style={styles.skillTitle}>🎨 Graphic Designing</Text>
          <Text style={styles.skillDescription}>
          I craft visuals that speak louder than words! Using tools like Photoshop and Canva, I design logos, posters, and social media content—blending creativity with UI/UX principles to engage and inspire.
          </Text>
        </View>

        <View style={styles.skillContainer}>
          <Image 
            source={require('../assets/COMPLET.jpg')}
            style={styles.skillImage}
            resizeMode="cover"
          />
          <Text style={styles.skillTitle}>💻 Computer Literacy</Text>
          <Text style={styles.skillDescription}>
          From troubleshooting software to mastering productivity suites (Microsoft Office, Google Workspace), I navigate OS systems, cloud platforms, and data management tools with ease. Tech hiccups? Consider them solved.
          </Text>
        </View>

        <View style={styles.skillContainer}>
          <Image 
            source={require('../assets/CODING.jpg')}
            style={styles.skillImage}
            resizeMode="cover"
          />
          <Text style={styles.skillTitle}>🚀 Programming</Text>
          <Text style={styles.skillDescription}>
          I turn logic into action with Python, Java, and JavaScript. Building everything from simple calculators to dynamic web apps, I thrive on solving problems through clean code and algorithmic thinking.
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
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  skillContainer: {
    backgroundColor: 'rgba(80,80,80,0.8)', // Greyish tone
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  skillImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  skillTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  skillDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
});