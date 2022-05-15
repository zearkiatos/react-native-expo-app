import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Greeting from "./src/components/Greeting";
import LoginForm from "./src/components/LoginForm";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! 👋 🌎</Text>
      <LoginForm />
      <Greeting name="Pedro" />
      <Greeting name="Luis" />
      <Greeting name="Maria" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
