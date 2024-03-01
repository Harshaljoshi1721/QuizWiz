import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, Alert, Linking, Pressable, ScrollView, SafeAreaView} from 'react-native';
import Google from "../assets/images/GooglePlus.png";
import Facebook from "../assets/images/Facebook.png";
import LinkedIn from "../assets/images/LinkedIn.png";

export const WelcomeScreen = (props) => {
  const openFacebookLogin = () => {
    Linking.openURL('https://www.facebook.com'); // Replace with your Facebook login URL
  };

  const openGoogleLogin = () => {
    Linking.openURL('https://accounts.google.com'); // Replace with your Google login URL
  };

  const openLinkedInLogin = () => {
    Linking.openURL('https://www.linkedin.com'); // Replace with your LinkedIn login URL
  };
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/quiz192.png')}
          style={styles.image}
        />
        <Text style={styles.logoText}>QuizWiz</Text>
      </View>
      <View style = {styles.thinkingImage}>
      <Image
          source={require('../assets/images/thinking.png')}
          style={{width: 300, height: 300, marginRight: 35, marginTop: 20}}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.WelcomeText}>Hello</Text>
        <Text style={styles.taglineText}>Welcome To QuizWiz, Where learning meets entertainment seamlessly!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.loginButton}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.loginbuttonText}>Login</Text>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => props.navigation.navigate('Sign Up')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.signupText}>
        <Text style={{color:"rgb(129, 133, 137)", fontSize:16, fontWeight:"bold"}}>Sign up using</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Pressable onPress={openFacebookLogin}>
            <Image source={Facebook} style={{ marginRight: 10, height: 40, width: 40 }} />
          </Pressable>
          <Pressable onPress={openGoogleLogin}>
            <Image source={Google} style={{ height: 40, width: 40 }} />
          </Pressable>
          <Pressable onPress={openLinkedInLogin}>
            <Image source={LinkedIn} style={{ marginLeft:10, height: 40, width: 40 }} />
          </Pressable>
        </View>
      </View>
      <StatusBar style= "auto" />
    </View>
    </ScrollView>
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
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
  },
  thinkingImage:{
   justifyContent: "center",
   alignItems: "center",
   marginTop: 10
  },
  image: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginTop: 20,
  },
  logoText: {
    marginLeft: 5,
    fontSize: 24, // Adjust the font size as needed
    fontWeight: "bold", // Adjust the font weight as needed
    marginTop: 18,
    color: "rgba(115,84,251,247)",
  },
  WelcomeText: {
   fontSize: 28,
   fontWeight: "bold",
   color: "black",
   marginBottom: 10, // Adjust margin bottom as needed
  },
  taglineText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "rgb(129, 133, 137)"
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'rgba(115,84,251,247)',
    paddingVertical: 15,
    width: 250, // Set a fixed width for the button
    borderRadius: 25,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  loginbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "rgba(115,84,251,247)",
    backgroundColor: "#fff",
    paddingVertical: 15,
    width: 250, // Set a fixed width for the button
    borderRadius: 25,
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  signupButtonText: {
    color: 'rgba(115,84,251,247)',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupText: {
  marginTop: 30,
  justifyContent: "center",
  alignItems: "center",
  },
});

export default WelcomeScreen;
