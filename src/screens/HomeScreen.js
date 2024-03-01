import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Pressable,ScrollView} from "react-native";
import { getUserNameByEmail } from "../../db/mydb";

export const HomeScreen = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    // Retrieve user's email from props.route.params
    const userEmail = props.route.params.userEmail;

    // Fetch user's name from the database based on email
    getUserNameByEmail(userEmail, (name) => {
      setUserName(name);d
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Main-Content */}
        <View style = {styles.container}>
        <View style={styles.content}>
          <View style={styles.topBox}>
            <View style={styles.imageWrapper}>
              <Image
                style={styles.image}
                source={require('../assets/images/profilepicture.png')}
              />
              <Text style={styles.nameText}>Hello, {userName}</Text>
            </View>
          </View>

          {/* Card with "Play and Win" text */}
          <View style={styles.card}>
            <Text>
            </Text>
          </View>

          {/* Add "Top Quiz Categories" text and "View All" button */}
          <View style={styles.topQuizCategoriesContainer}>
              <Text style={styles.topQuizCategoriesText}>Top Quiz Categories</Text>
              <Pressable style={styles.viewAllButton}>
                <Text style={styles.viewAllButtonText}>View All</Text>
              </Pressable>
            </View>


            <View style={styles.subjectContainer}>
              {/* First Row */}
              <View style={styles.subjectRow}>
                <View style={styles.subjectCard}>
                  <View style={styles.subject}>
                    <Image
                      style={styles.subjectImage}
                      source={require('../assets/images/mathicon.png')}
                    />
                    <Text style={styles.subjectText}>Mathematics</Text>
                  </View>
                </View>
                <View style={styles.subjectCard}>
                  <View style={styles.subject}>
                    <Image
                      style={styles.subjectImage}
                      source={require('../assets/images/scienceicon.png')}
                    />
                    <Text style={styles.subjectText}>Science</Text>
                  </View>
                </View>
                <View style={styles.subjectCard}>
                  <View style={styles.subject}>
                    <Image
                      style={styles.subjectImage}
                      source={require('../assets/images/dramaicon.png')}
                    />
                    <Text style={styles.subjectText}>Drama</Text>
                  </View>
                </View>
              </View>
             {/* Second Row */}
             <View style={styles.subjectRow}>
                <View style={styles.subjectCard}>
                  <View style={styles.subject}>
                    <Image
                      style={styles.subjectImage}
                      source={require('../assets/images/articon.png')}
                    />
                    <Text style={styles.subjectText}>Art & Craft</Text>
                  </View>
                </View>
                <View style={styles.subjectCard}>
                  <View style={styles.subject}>
                    <Image
                      style={styles.subjectImage}
                      source={require('../assets/images/gkicon.png')}
                    />
                    <Text style={styles.subjectText}>Knowledge</Text>
                  </View>
                </View>
                <View style={styles.subjectCard}>
                  <View style={styles.subject}>
                    <Image
                      style={styles.subjectImage}
                      source={require('../assets/images/languageicon.png')}
                    />
                    <Text style={styles.subjectText}>Language</Text>
                  </View>
                </View>
            </View>
           </View>
        </View>
        </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Image style={{ width: 25, height: 25 }} source={require('../assets/images/homeiconcustom.png')} />
          <Pressable onPress={() => props.navigation.navigate('Notification')}>
          <Image style={{ width: 25, height: 25 }} source={require('../assets/images/notificationiconblack.png')} />
          </Pressable>
          <Pressable onPress={() => props.navigation.navigate('Category')}>
          <Image style={{ width: 25, height: 25 }} source={require('../assets/images/categoryiconblack.png')} />
          </Pressable>
          <Pressable onPress={toggleMenu}>
            <Image style={{ width: 25, height: 25 }} source={require('../assets/images/menuiconblack.png')} />
          </Pressable>
          {isMenuOpen && (
            <View style={styles.menu}>
              <Text style={[styles.menuItem, styles.menuItemWithBorder]}>Profile</Text>
              <Text style={[styles.menuItem, styles.menuItemWithBorder]}>Achievements</Text>
              <Text style={[styles.menuItem, styles.menuItemWithBorder]} onPress={() => props.navigation.navigate('Settings')}>Settings</Text>
              <Text style={styles.menuItem} onPress={() => props.navigation.navigate('Login')}>Logout</Text>
            </View>
          )}
        </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  topBox: {
    backgroundColor: "#a49cfc",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 200,
    position: 'relative',
  },
  imageWrapper: {
    position: 'absolute',
    top: 40,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#F4FC9C",
  },
  nameText: {
    marginLeft: 14,
    color: '#fff',
    fontWeight: "bold",
    fontSize: 20,
  },
  card: {
    backgroundColor: "#6c53fb",
    margin: 20,
    marginTop: -70,
    padding: 80,
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  questionMarkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // Adjust as needed for spacing
  },
  questionMarkImage: {
    width: 30, // Adjust as needed
    height: 30, // Adjust as needed
    marginRight: 5, // Adjust as needed for spacing between question mark images
  },
  playAndWinText: {
    fontSize: 18, // Adjust as needed
    fontWeight: 'bold', // Adjust as needed
    color: 'black', // Adjust as needed
    marginLeft: 'auto', // Pushes the text to the right side of the container
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menu: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 100,
    right: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 10,
    color: "#000"
  },
  menuItemWithBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  topQuizCategoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  topQuizCategoriesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#000",
  },
  viewAllButton: {
    backgroundColor: '#DAD3FE',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  viewAllButtonText: {
    color: '#6C53FB',
    fontWeight: 'bold',
  },
  subjectContainer: {
    marginTop: 50, // Adjust as needed
    paddingHorizontal: 20,
  },
  subjectRow: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Evenly space subjects
    marginBottom: 50, // Adjust spacing between rows as needed
  },
  subject: {
    alignItems: 'center', // Center items horizontally
    flex: 1, // Equal width for all subjects in a row
  },
  subjectImage: {
    width: 50, // Adjust image width as needed
    height: 50, // Adjust image height as needed
    marginBottom: 5, // Adjust spacing between image and text as needed
  },
  subjectText: {
    textAlign: 'center', // Center text horizontally
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  subjectCard: {
    backgroundColor: '#FFFFFF', // Set your desired background color
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    elevation: 8, // Add elevation for Android shadow
    shadowColor: '#000000', // Add shadow color for iOS shadow
    shadowOpacity: 0.2, // Add shadow opacity for iOS shadow
    shadowRadius: 3, // Add shadow radius for iOS shadow
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default HomeScreen;
