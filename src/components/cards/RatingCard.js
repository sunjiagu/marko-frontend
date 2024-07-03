import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RatingCard = ({ Rating_subject, Rating_stars, Rating_description, Rating_image, ratingScore, numberOfRatings }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: Rating_image }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.subject}>{Rating_subject}</Text>
          <Text style={styles.stars}>{'★'.repeat(Rating_stars)}{'☆'.repeat(5 - Rating_stars)}</Text>
        </View>
        <Text style={styles.description}>{Rating_description}</Text>
        <Text style={styles.score}>{ratingScore}</Text>
        <Text style={styles.ratings}>({numberOfRatings} ratings)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stars: {
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  score: {
    fontSize: 16,
    color: '#FF891B', // Score color
  },
  ratings: {
    fontSize: 12,
    color: '#999',
  },
});

export default RatingCard;
