import { Text, View, StyleSheet, Image, ScrollView, ImageBackground } from "react-native";

export default function Education() {
  return (
    <ImageBackground 
      source={require('../assets/tabagwang.jpg')}  
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
            Graduated at conception grande Elementary school.
          </Text>
        </View>

        <View style={styles.schoolContainer}>
          <Image 
            source={require('../assets/SAGURONG.jpg')}  
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>🎓 High School</Text>
          <Text style={styles.schoolDescription}>
            I Graduated at SAGURONG High school at junior high.
          </Text>
        </View>

        <View style={styles.schoolContainer}>
          <Image 
            source={require('../assets/ACLC.jpg')}  
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>🎓 Senior High School</Text>
          <Text style={styles.schoolDescription}>
            I Graduated at ACLC NAGA in senior high.
          </Text>
        </View>

        <View style={styles.schoolContainer}>
          <Image 
            source={require('../assets/NCF.jpg')}  
            style={styles.schoolLogo}
          />
          <Text style={styles.schoolName}>💻 College</Text>
          <Text style={styles.schoolDescription}>
            Now im studen at Naga College Foundation BSCS is my course (2nd year), and iwant to grow as a student to understand programming using my school and be a frontend developer at a future.
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
    color: 'black',
  },
  schoolContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Greyish tone
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