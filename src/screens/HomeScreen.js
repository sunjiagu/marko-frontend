import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RatingCard from '../components/cards/RatingCard';
import BottomBar from '../components/shared/Bottombar';

const mockRatings = [
  {
    id: '1',
    Rating_subject: 'Michael Jordan',
    Rating_stars: 4,
    Rating_description: 'The GOAT!',
    Rating_image: 'example',
    ratingScore: 4.2,
    numberOfRatings: 15,
  },
  {
    id: '2',
    Rating_subject: 'Kobe',
    Rating_stars: 5,
    Rating_description: 'The worst',
    Rating_image: 'example',
    ratingScore: 4.8,
    numberOfRatings: 32,
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
    backgroundColor: '#f0f0f0', // Light gray background for the container
  },
  header: {
    backgroundColor: '#FE451A',
    padding: 32,
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'Luckiest Guy', // Ensure the font is properly loaded
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardContainer: {
    backgroundColor: 'white', // White background for cards
    marginVertical: 4, // Small gap between cards
    padding: 16,
    borderRadius: 8,
  },
});

export default HomeScreen;
