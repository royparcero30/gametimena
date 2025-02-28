import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";

export default function Education() {
  return (
    <ImageBackground 
      source={require('../assets/BLACKBG.jpg')}  
      style={styles.container}
      resizeMode="cover" 
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>My Education</Text>

        <View style={styles.schoolContainer}>
          <Image 
            source={require('../assets/SAGURONGELEM.jpg')}  
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>📚 Elementary</Text>
          <Text style={styles.schoolDescription}>
            Graduated from Doña Soledad Marasigan Elementary School (2009), where curiosity for learning first sparked.
          </Text>
        </View>

        <View style={styles.schoolContainer}>
          <Image 
            source={require('../assets/SAGURONG.jpg')}  
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>🎓 High School</Text>
          <Text style={styles.schoolDescription}>
            Continued growing at Sagurong High School, graduating in 2014 a chapter that fueled my problem-solving mindset.
          </Text>
        </View>

        <View style={styles.schoolContainer}>
          <Image 
            source={require('../assets/NCF.jpg')}  
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>💻 College</Text>
          <Text style={styles.schoolDescription}>
            Now pursuing BSCS at Naga College Foundation (2nd year), diving deep into programming, algorithms, and tech innovation. Every project and line of code brings me closer to my goal: building solutions that make a difference.
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
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#fff',
  },
  schoolContainer: {
    backgroundColor: 'rgba(80,80,80,0.8)', // Greyish tone
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
  },
  schoolLogo: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginBottom: 10,
  },
  schoolName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  schoolDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
});