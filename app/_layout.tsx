import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="about" 
        options={{ 
          title: "About Me",
          tabBarLabel: "About",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="education" 
        options={{ 
          title: "Education",
          tabBarLabel: "Education",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="hobbies" 
        options={{ 
          title: "Hobbies",
          tabBarLabel: "Hobbies",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="skills" 
        options={{ 
          title: "Skills",
          tabBarLabel: "Skills",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="build-outline" color={color} size={size} />
          )
        }} 
      />
      <Tabs.Screen 
        name="contact" 
        options={{ 
          title: "My Contact",
          tabBarLabel: "Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          )
        }} 
      />
    </Tabs>
  );
}