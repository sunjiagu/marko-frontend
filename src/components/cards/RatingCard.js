import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import StarRating from "../ui/StarRating";

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
  const [avgRating, setAvgRating] = useState(ratingScore);
  const [totalRatings, setTotalRatings] = useState(numberOfRatings);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    setUserRating(Rating_stars);
  }, [Rating_stars]);

  const handleRating = (newRating) => {
    setUserRating(newRating);
    // Here you would typically update the rating on the server
    // For now, we'll just update the local state
    const newTotalRatings = totalRatings + 1;
    const newAvgRating = ((avgRating * totalRatings) + newRating) / newTotalRatings;
    setAvgRating(newAvgRating);
    setTotalRatings(newTotalRatings);
  };

  return (
    <View style={styles.ratingItem}>
      <View style={styles.contentContainer}>
        <Image
          source={Rating_image}
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
            size={23}
            style={styles.stars}
          />
          <Text style={styles.score}>{avgRating.toFixed(1)}</Text>
          <Text style={styles.ratingCount}>{totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingItem: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'start',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight:10,
    marginLeft:6
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'PT Sans Bold',
    marginTop: 2,
  },
  description: {
    fontSize: 12,
    fontFamily: 'PT Sans',
    color: '#666',
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  stars: {
    marginBottom: 2,
  },
  score: {
    fontSize: 32,
    fontFamily: 'PT Sans Bold',
    color: '#FF891B'
  },
  ratingCount: {
    fontSize: 10,
    fontFamily: 'PT Sans',
    color: '#666',
  },
});

export default RatingCard;