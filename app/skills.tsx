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
         im building my self as a skilled in graphic design with online tools like Canva makes it easy to create professional and creative designs. Canva offers simple templates and features that help make eye-catching graphics for social media, marketing, and other projects. It helps me improve creativity and makes designing faster and more convenient.
          </Text>
        </View>

        <View style={styles.skillContainer}>
          <Image 
            source={require('../assets/CODING.jpg')}
            style={styles.skillImage}
            resizeMode="cover"
          />
          <Text style={styles.skillTitle}>vlogger</Text>
          <Text style={styles.skillDescription}>
         im a vlogger and ilove what im doing and i believe that vlogging is also my passion.
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