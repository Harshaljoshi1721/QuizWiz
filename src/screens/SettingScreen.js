import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, FlatList, TextInput, Button, Alert, Image, Pressable} from "react-native";
import { getUsers, insertUser, deleteUser } from "../../db/mydb";

export const SettingScreen = () => {
    const [userData, setUserData] = useState([]);
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        getUsers((users) => {
            setUserData(users);
        });
    }, []);

    const renderUserItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.column}>{item.id}</Text>
            <Text style={styles.column}>{item.name}</Text>
            <Text style={styles.column}>{item.email}</Text>
            <View style={styles.deleteButtonColumn}>
                <Pressable onPress={() => deleteUserHandler(item.id)}>
                   <Image style={{width: 25, height:25}} source={require('../assets/images/deleteicon.png')}></Image>
                </Pressable>
            </View>
        </View>
    );

    const addUserHandler = () => {
        if (newUserName.trim() === '' || newUserEmail.trim() === '' || newUserPassword.trim() === '' || confirmPassword.trim() === '') {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }
        if (newUserPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        insertUser(newUserName, newUserEmail, newUserPassword);
        setNewUserName('');
        setNewUserEmail('');
        setNewUserPassword('');
        setConfirmPassword('');
        getUsers((users) => {
            setUserData(users);
        });
        Alert.alert('Success', 'User created successfully');
    };

    const deleteUserHandler = (userId) => {
        // Display confirmation dialog
        Alert.alert(
            'Confirm Deletion',
            'Are you sure you want to delete this user?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        // Delete user if confirmed
                        deleteUser(userId);
                        getUsers((users) => {
                            setUserData(users);
                        });
                        // Display deletion message
                        Alert.alert('Success', 'User deleted successfully');
                    },
                    style: 'destructive', // This style will make the button red (on iOS)
                },
            ],
            { cancelable: true }
        );
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.column, styles.headerText]}>UserID</Text>
                    <Text style={[styles.column, styles.headerText]}>Name</Text>
                    <Text style={[styles.column, styles.headerText]}>Email</Text>
                </View>
                <FlatList
                    data={userData}
                    renderItem={renderUserItem}
                    keyExtractor={(item) => item.id.toString()}
                />
                <View style={styles.addUserContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        value={newUserName}
                        onChangeText={setNewUserName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={newUserEmail}
                        onChangeText={setNewUserEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={newUserPassword}
                        onChangeText={setNewUserPassword}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <Button title="Add User" onPress={addUserHandler} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: '5%', // Adjust the horizontal padding as a percentage of screen width
        paddingTop: '10%', // Adjust the top padding as a percentage of screen height
        paddingBottom: '5%', // Adjust the bottom padding as a percentage of screen height
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    headerText: {
        fontWeight: "bold",
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 5,
    },
    column: {
        flex: 1,
    },
    addUserContainer: {
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SettingScreen;
