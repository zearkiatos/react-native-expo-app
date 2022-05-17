import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Greeting from "./src/components/Greeting";
import LoginForm from "./src/components/LoginForm";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hello World! 👋 🌎</Text>
        <LoginForm />
        <Greeting firstname="Pedro" lastname="Capriles" />
        <Greeting firstname="Luis" lastname="Perez" />
        <Greeting firstname="Maria" lastname="Rojas" />
        <Greeting />
      </View>
    </NavigationContainer>
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
