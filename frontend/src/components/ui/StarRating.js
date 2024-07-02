import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const StarRating = ({ 
  count = 5, 
  rating = 0, 
  size = 24, 
  onRatingChange,
  isInteractive = false,
  style = {}
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handlePress = (index) => {
    if (isInteractive) {
      onRatingChange(index);
    }
  };

  const starRenderConfig = [...Array(count)].map((_, index) => {
    const starValue = index + 1;
    const isSelected = starValue <= (hoverRating || rating);

    return (
      <TouchableOpacity
        key={index}
        onPress={() => handlePress(starValue)}
        onPressIn={() => isInteractive && setHoverRating(starValue)}
        onPressOut={() => isInteractive && setHoverRating(0)}
      >
        <Image
          source={isSelected ? require('../../assets/stars_filled.png') : require('../../assets/stars_unfilled.png')}
          style={[styles.star, { width: size, height: size }]}
        />
      </TouchableOpacity>
    );
  });

  return (
    <View style={[styles.container, style]}>
      {starRenderConfig}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginHorizontal: 2,
  },
});

export default StarRating;