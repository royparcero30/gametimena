import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
          <Stack.Screen name="index" options={{ title: "Home"}}/>
          <Stack.Screen name="about" options={{ title: "how About Me"}}/>
          <Stack.Screen name="education" options={{ title: "Education"}}/>
          <Stack.Screen name="hobbies" options={{ title: "Hobbies"}}/>
          <Stack.Screen name="skills" options={{ title: "Skills"}}/>
          <Stack.Screen name="contact" options={{ title: "My Contact"}} />
    </Stack>
  );
}