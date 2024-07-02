import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { updateUser } from '../services/userService';

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = async () => {
    try {
      await updateUser({
        username,
        nickname,
        bio,
        profile_pic: profilePic,
        // Add other necessary fields
      });
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Marko!</Text>
      
      <View style={styles.profilePicContainer}>
        {profilePic ? (
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
        ) : (
          <Text>Tap to add profile picture</Text>
        )}
      </View>
      
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      
      <Input
        placeholder="Nickname"
        value={nickname}
        onChangeText={setNickname}
        style={styles.input}
      />
      
      <Input
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        style={[styles.input, styles.bioInput]}
        multiline
      />
      
      <Button onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Let's go!</Text>
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  profilePicContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 24,
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  input: {
    marginBottom: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FF6347',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OnboardingScreen;