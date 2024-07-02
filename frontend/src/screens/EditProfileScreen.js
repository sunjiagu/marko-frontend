import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { fetchUserProfile, updateUser } from '../services/userService';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userId } = route.params;
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [bio, setBio] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    loadUserProfile();
  }, [userId]);

  const loadUserProfile = async () => {
    try {
      const profile = await fetchUserProfile(userId);
      setUsername(profile.username);
      setNickname(profile.nickname);
      setBio(profile.bio);
      setProfilePic(profile.profile_pic);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePic(result.uri);
    }
  };

  const handleSubmit = async () => {
    try {
      await updateUser({
        userId,
        username,
        nickname,
        bio,
        profile_pic: profilePic,
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Text>Cancel</Text>
        </Button>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <Button onPress={handleSubmit}>
          <Text>Save</Text>
        </Button>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity onPress={handleImagePick} style={styles.profilePicContainer}>
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
          ) : (
            <Text>Add Photo</Text>
          )}
        </TouchableOpacity>
        
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
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
});

export default EditProfileScreen;