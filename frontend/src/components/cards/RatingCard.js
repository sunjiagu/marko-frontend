import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StarRating from "../ui/StarRating";
import { submitRating, getUserRating } from '../../services/ratingService';

const RatingCard = ({
  id,
  Rating_subject,
  Rating_stars,
  Rating_description,
  Rating_image,
  ratingScore,
  numberOfRatings,
  currentUserId,
}) => {
  const navigation = useNavigation();
  const [avgRating, setAvgRating] = useState(ratingScore);
  const [totalRatings, setTotalRatings] = useState(numberOfRatings);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const fetchUserRating = async () => {
      const rating = await getUserRating(id, currentUserId);
      setUserRating(rating);
    };
    fetchUserRating();
  }, [id, currentUserId]);

  const handleRating = async (newRating) => {
    try {
      const result = await submitRating(id, newRating, currentUserId);
      setAvgRating(result.ratingScore);
      setTotalRatings(result.numberOfRatings);
      setUserRating(newRating);
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('RatingDetail', { id })}>
      <View style={styles.ratingItem}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: Rating_image }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{Rating_subject}</Text>
            <Text style={styles.description}>{Rating_description}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <StarRating
              rating={userRating}
              onRatingChange={handleRating}
              size={22}
              style={styles.stars}
            />
            <Text style={styles.score}>{avgRating.toFixed(1)}</Text>
            <Text style={styles.ratingCount}>{totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ratingItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  stars: {
    marginBottom: 4,
  },
  score: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 12,
    color: '#666',
  },
});

export default RatingCard;