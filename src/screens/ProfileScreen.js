import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';
import RatingCard from '../components/cards/RatingCard';
//import { fetchUserProfile, fetchUserRatings } from '../services/userService';

const ProfileScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userId } = route.params;
  const [userProfile, setUserProfile] = useState(null);
  const [userRatings, setUserRatings] = useState([]);

  useEffect(() => {
    loadUserProfile();
    loadUserRatings();
  }, [userId]);

  const loadUserProfile = async () => {
    try {
      const profile = await fetchUserProfile(userId);
      setUserProfile(profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const loadUserRatings = async () => {
    try {
      const ratings = await fetchUserRatings(userId);
      setUserRatings(ratings);
    } catch (error) {
      console.error('Error fetching user ratings:', error);
    }
  };

  if (!userProfile) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Text>←</Text>
        </Button>
        <Text style={styles.headerTitle}>{userProfile.username}</Text>
        <Button onPress={() => navigation.navigate('EditProfile', { userId })}>
          <Text>Edit</Text>
        </Button>
      </View>
      
      <View style={styles.profileInfo}>
        <Image source={{ uri: userProfile.profile_pic }} style={styles.profilePic} />
        <Text style={styles.nickname}>{userProfile.nickname}</Text>
        <Text style={styles.bio}>{userProfile.bio}</Text>
      </View>
      
      <View style={styles.ratingsList}>
        {userRatings.map((rating) => (
          <RatingCard
            key={rating.id}
            id={rating.id}
            Rating_subject={rating.Rating_subject}
            Rating_stars={rating.Rating_stars}
            Rating_description={rating.Rating_description}
            Rating_image={rating.Rating_image}
            ratingScore={rating.ratingScore}
            numberOfRatings={rating.numberOfRatings}
            currentUserId={userId}
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