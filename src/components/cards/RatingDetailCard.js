import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import StarRating from "../ui/StarRating";
//import { submitRating, getUserRating } from '../../services/ratingService';

const RatingDetailCard = ({
  id,
  Rating_subject,
  Rating_stars,
  Rating_description,
  Rating_image,
  ratingScore,
  numberOfRatings,
  currentUserId,
}) => {
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
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: Rating_image }}
          style={styles.image}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.title}>{Rating_subject}</Text>
            <Text style={styles.description}>{Rating_description}</Text>
          </View>
          <View style={styles.ratingInfo}>
            <Text style={styles.score}>{avgRating.toFixed(1)}</Text>
            <Text style={styles.ratingCount}>{totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}</Text>
          </View>
        </View>
        <View style={styles.starContainer}>
          <StarRating
            rating={userRating}
            onRatingChange={handleRating}
            size={22}
            style={styles.stars}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 112,
    height: 112,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
  ratingInfo: {
    alignItems: 'flex-end',
    marginRight: 8,
    marginBottom: 4,
  },
  score: {
    fontSize: 18,
    fontWeight: '600',
  },
  ratingCount: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 10,
  },
  starContainer: {
    marginTop: 'auto',
    alignItems: 'flex-end',
  },
  stars: {
    marginTop: 8,
  },
});

export default RatingDetailCard;