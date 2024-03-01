import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, Image, ScrollView,KeyboardAvoidingView, SafeAreaView} from "react-native";
import { getUsers } from "../../db/mydb";

export const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    getUsers((users) => {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        // Navigate to Home page if user exists
        props.navigation.navigate("Home", { userEmail: email });
      } else {
        // Show message to sign up if user does not exist
        alert("User does not exist. Please sign up.");
      }
    });
  };

    return (
      <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Adjust as needed
    >
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View  style={styles.container}>
         <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/quiz192.png')}
            style={styles.image}
          />
      </View>
      <View style={styles.loginImage}>
      <Image source={require('../assets/images/Login.jpg')} style={{width: 300, height: 300}}/>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.loginTxt}>Login</Text>
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
          <Text style={{marginTop:10, fontSize: 13, color:"#745cfa", fontWeight:"bold", marginLeft:5}}>Forgot password?</Text>
        </View>     
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account? </Text>
          <Pressable onPress={() => props.navigation.navigate('Sign Up')}>
            <Text style={styles.signUpLink}>Sign up</Text>
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
  loginImage:{
    justifyContent: "center",
    alignItems: "center",
   },
  loginTxt: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    color: "rgba(115,84,251,247)",
    marginBottom: 20,
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

export default LoginScreen;
