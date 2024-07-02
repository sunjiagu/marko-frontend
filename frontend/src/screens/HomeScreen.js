import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RatingCard from '../components/cards/RatingCard';
import Button from '../components/ui/Button';
import { fetchRatings } from '../services/ratingService';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    loadRatings();
  }, []);

  const loadRatings = async () => {
    try {
      const fetchedRatings = await fetchRatings();
      setRatings(fetchedRatings);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MARKO</Text>
      </View>
      
      <FlatList
        data={ratings}
        renderItem={({ item }) => (
          <RatingCard
            id={item.id}
            Rating_subject={item.Rating_subject}
            Rating_stars={item.Rating_stars}
            Rating_description={item.Rating_description}
            Rating_image={item.Rating_image}
            ratingScore={item.ratingScore}
            numberOfRatings={item.numberOfRatings}
            currentUserId="current-user-id" // Replace with actual current user ID
          />
        )}
        keyExtractor={(item) => item.id}
      />
      
      <View style={styles.footer}>
        <Button onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </Button>
        <Button onPress={() => navigation.navigate('CreateRating')}>
          <Text>+</Text>
        </Button>
        <Button onPress={() => navigation.navigate('Profile')}>
          <Text>Profile</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#FF6347',
    padding: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
});

export default HomeScreen;