import React from 'react';
import { View, StyleSheet } from 'react-native';
import StarRating from '../ui/StarRating';
import { submitRating } from '../../services/ratingService';

const SubmitRating = ({ ratingId, currentUserId, onRatingSubmitted }) => {
  const handleRating = async (newRating) => {
    try {
      const result = await submitRating(ratingId, newRating, currentUserId);
      onRatingSubmitted(result);
    } catch (error) {
      console.error('Error submitting rating:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <View style={styles.container}>
      <StarRating
        count={5}
        rating={0}
        size={30}
        onRatingChange={handleRating}
        isInteractive={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
});

export default SubmitRating;