import React, { useRef } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";


const { width } = Dimensions.get("window");
const slideWidth = 300; // width of each slide

export default function Education() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slides = [
    { id: "1", image: require("./assets/NCF.jpg"), title: "School 1" },
    { id: "2", image: require("./assets/ACLC.jpg"), title: "School 2" },
    { id: "3", image: require("./assets/SAGURONG.jpg"), title: "School 3"},
    { id: "4 ", image: require("./assets/SAGURONGELEM.jpg"), title: "School 4"},
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Education</Text>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slider}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => {
          const scale = scrollX.interpolate({
            inputRange: [
              (index - 1) * slideWidth,
              index * slideWidth,
              (index + 1) * slideWidth,
            ],
            outputRange: [0.8, 1, 0.8],
            extrapolate: "clamp",
          });
          return (
            <View key={slide.id} style={[styles.slide, { width: slideWidth }]}>
              <Animated.Image
                source={slide.image}
                style={[styles.logo, { transform: [{ scale }] }]}
                resizeMode="contain"
              />
              <Text style={styles.slideText}>{slide.title}</Text>
            </View>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  slider: {
    alignItems: "center",
  },
  slide: {
    height: 300,
    backgroundColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  slideText: {
    color: "#fff",
    fontSize: 16,
  },
});
