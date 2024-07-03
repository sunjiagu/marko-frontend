import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../components/ui/Button';
import RatingCard from '../components/cards/RatingCard';
import BottomBar from '../components/shared/Bottombar';

const mockUserProfile = {
  id: 'user1',
  username: 'superman',
  nickname: 'Clark',
  bio: 'Coffee lover and food enthusiast',
  profile_pic: require('../../assets/superman.jpg'),
};

const mockUserRatings = [
  {
    id: '1',
    Rating_subject: 'Lebron',
    Rating_stars: 5,
    Rating_description: 'I wish I am Bronny!',
    Rating_image: require('../../assets/lebron.png'),
    ratingScore: 4.9,
    numberOfRatings: 20,
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.iconButton} />
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
      
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 16
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    fontFamily: "PT Sans Bold"
  },
  iconButton: {
    padding: 8,
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
