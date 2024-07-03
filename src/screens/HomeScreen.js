import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RatingCard from '../components/cards/RatingCard';
import BottomBar from '../components/shared/Bottombar';

const mockRatings = [
  {
    id: '1',
    Rating_subject: 'Michael Jordan',
    Rating_stars: 4,
    Rating_description: 'The GOAT!',
    Rating_image: require('../../assets/mj.png'),
    ratingScore: 8.2,
    numberOfRatings: 15,
  },
  {
    id: '2',
    Rating_subject: 'Kobe Bryant',
    Rating_stars: 2,
    Rating_description: 'The worst',
    Rating_image: require('../../assets/kobe.png'),
    ratingScore: 8.8,
    numberOfRatings: 32,
  },
  {
    id: '3',
    Rating_subject: 'Lebron James',
    Rating_stars: 5,
    Rating_description: 'The most Beautiful',
    Rating_image: require('../../assets/lebron.png'),
    ratingScore: 9.8,
    numberOfRatings: 123,
  },
  {
    id: '4',
    Rating_subject: 'Stephen Curry',
    Rating_stars: 4,
    Rating_description: 'The cutest',
    Rating_image: require('../../assets/curry.png'),
    ratingScore: 2.8,
    numberOfRatings: 32,
  },
  {
    id: '6',
    Rating_subject: 'Draymond Green',
    Rating_stars: 4,
    Rating_description: 'The most hated',
    Rating_image: require('../../assets/green.png'),
    ratingScore: 2.1,
    numberOfRatings: 2,
  },
  {
    id: '6',
    Rating_subject: 'Jayson Tatum',
    Rating_stars: 3,
    Rating_description: 'The most hated',
    Rating_image: require('../../assets/tatum.png'),
    ratingScore: 2.1,
    numberOfRatings: 987,
  },
  // Add more mock ratings as needed
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [ratings, setRatings] = useState(mockRatings);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MARKO</Text>
      </View>
      
      <FlatList
        data={ratings}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <RatingCard
              id={item.id}
              Rating_subject={item.Rating_subject}
              Rating_stars={item.Rating_stars}
              Rating_description={item.Rating_description}
              Rating_image={item.Rating_image}
              ratingScore={item.ratingScore}
              numberOfRatings={item.numberOfRatings}
              currentUserId="current-user-id"
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#FE451A',
    paddingTop: 70,
    paddingLeft: 16,
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Luckiest Guy',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical:6,
  },
  cardContainer: {
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 16,
  },
});

export default HomeScreen;