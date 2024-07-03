import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';
import RatingCard from '../components/cards/RatingCard';

const mockUserProfile = {
  id: 'user1',
  username: 'superman',
  nickname: 'Clark',
  bio: 'Coffee lover and food enthusiast',
  profile_pic: 'https://example.com/profile-pic.jpg',
};

const mockUserRatings = [
  {
    id: '1',
    Rating_subject: 'Lebron',
    Rating_stars: 5,
    Rating_description: 'I wish I am Bronny!',
    Rating_image: 'https://example.com/cafe.jpg',
    ratingScore: 4.9,
    numberOfRatings: 20,
  },
  // Add more mock ratings as needed
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Text>←</Text>
        </Button>
        <Text style={styles.headerTitle}>{mockUserProfile.username}</Text>
        <Button onPress={() => navigation.navigate('EditProfile', { userId: mockUserProfile.id })}>
          <Text>Edit</Text>
        </Button>
      </View>
      
      <View style={styles.profileInfo}>
        <Image source={{ uri: mockUserProfile.profile_pic }} style={styles.profilePic} />
        <Text style={styles.nickname}>{mockUserProfile.nickname}</Text>
        <Text style={styles.bio}>{mockUserProfile.bio}</Text>
      </View>
      
      <View style={styles.ratingsList}>
        {mockUserRatings.map((rating) => (
          <RatingCard
            key={rating.id}
            id={rating.id}
            Rating_subject={rating.Rating_subject}
            Rating_stars={rating.Rating_stars}
            Rating_description={rating.Rating_description}
            Rating_image={rating.Rating_image}
            ratingScore={rating.ratingScore}
            numberOfRatings={rating.numberOfRatings}
            currentUserId={mockUserProfile.id}
          />
        ))}
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
  profileInfo: {
    alignItems: 'center',
    padding: 16,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  nickname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    textAlign: 'center',
    color: '#666',
  },
  ratingsList: {
    padding: 16,
  },
});

export default ProfileScreen;