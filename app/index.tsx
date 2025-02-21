import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={styles.container}>
            <Link href="/about" style={styles.button}>About</Link>
            <Link href="/education" style={styles.button}>Education</Link>
            <Link href="/hobbies" style={styles.button}>Hobbies</Link>
            <Link href="/skills" style={styles.button}>Skills</Link>
            <Link href="/contact" style={styles.button}>Contact</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});