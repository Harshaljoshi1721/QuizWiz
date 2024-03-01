import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Pressable, KeyboardAvoidingView,SafeAreaView} from "react-native";
import { insertUser } from "../../db/mydb";


export const RegisterScreen = (props) => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [confirmpassword, setconfirmPassword] = useState("");

 const handleRegister = () => {
  // Insert user data into the database
  insertUser(name, email, password);
  props.navigation.navigate('Home', { userEmail: email });
};


return (
  <SafeAreaView style={styles.safeArea}>
  <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust as needed
    >
  <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
    <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/quiz192.png')}
            style={styles.image}
          />
      </View>
      <View style={styles.registerImage}>
        <Image source={require('../assets/images/RegisterHello.png')} style={{ width: 200, height: 200 }} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.registerTxt}>Register</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your Email"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your Password"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmpassword}
            onChangeText={setconfirmPassword}
            placeholder="Enter your Password Again"
            secureTextEntry={true}
          />
        </View>
        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <Pressable onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.signUpLink}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </ScrollView>
  </KeyboardAvoidingView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: '5%', // Adjust the horizontal padding as a percentage of screen width
    paddingTop: '10%', // Adjust the top padding as a percentage of screen height
    paddingBottom: '5%', // Adjust the bottom padding as a percentage of screen height
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  registerImage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  image: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginTop: 10,
  },
  logoText: {
    marginLeft: 5,
    fontSize: 24, // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight as needed
    marginTop: 18,
    color: "rgba(115,84,251,247)",
  },
  registerTxt: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "rgba(115,84,251,247)",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
    marginLeft: 5, // Align the label to the left
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'rgba(115,84,251,247)',
    paddingVertical: 15,
    width: 250, // Set a fixed width for the button
    borderRadius: 25,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30
  },
  signUpText: {
    fontSize: 16,
  },
  signUpLink: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(115,84,251,247)",
  },
});

export default RegisterScreen;
