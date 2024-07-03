import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';
import StarRating from '../components/ui/StarRating';
import CommentCard from '../components/cards/CommentCard';
import PostComment from '../components/forms/PostComment';

const mockRating = {
  id: '1',
  Rating_subject: 'Amazing Restaurant',
  Rating_stars: 4,
  Rating_description: 'Great food and atmosphere!',
  Rating_image: 'https://example.com/restaurant.jpg',
  ratingScore: 4.5,
  numberOfRatings: 30,
};

const mockComments = [
  {
    id: 'c1',
    comment_content: 'I totally agree, the food was delicious!',
    author: { name: 'Jane', image: 'https://example.com/jane.jpg' },
    createdAt: '2023-07-01T12:00:00Z',
  },
  // Add more mock comments as needed
];

const RatingDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const [rating, setRating] = useState(mockRating);
  const [comments, setComments] = useState(mockComments);

  const handleRatingSubmit = (newRating) => {
    setRating(prevRating => ({
      ...prevRating,
      ratingScore: (prevRating.ratingScore * prevRating.numberOfRatings + newRating) / (prevRating.numberOfRatings + 1),
      numberOfRatings: prevRating.numberOfRatings + 1,
    }));
  };

  const handleCommentSubmit = (newComment) => {
    setComments(prevComments => [
      {
        id: `c${prevComments.length + 1}`,
        comment_content: newComment,
        author: { name: 'You', image: 'https://example.com/default-avatar.jpg' },
        createdAt: new Date().toISOString(),
      },
      ...prevComments,
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Text>←</Text>
        </Button>
        <Text style={styles.headerTitle}>{rating.Rating_subject}</Text>
      </View>
      
      <View style={styles.ratingContent}>
        <Image source={{ uri: rating.Rating_image }} style={styles.ratingImage} />
        <Text style={styles.ratingDescription}>{rating.Rating_description}</Text>
        <View style={styles.ratingInfo}>
          <StarRating
            rating={rating.ratingScore}
            onRatingChange={handleRatingSubmit}
            size={30}
          />
          <Text style={styles.ratingScore}>{rating.ratingScore.toFixed(1)}</Text>
          <Text style={styles.ratingCount}>{rating.numberOfRatings} ratings</Text>
        </View>
      </View>
      
      <View style={styles.commentsSection}>
        <Text style={styles.commentsTitle}>Comments</Text>
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
          />
        ))}
      </View>
      
      <PostComment
        onCommentSubmit={handleCommentSubmit}
      />
    </ScrollView>
  );
};

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 16,
    },
    ratingContent: {
      padding: 16,
    },
    ratingImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 8,
      marginBottom: 16,
    },
    ratingDescription: {
      fontSize: 16,
      marginBottom: 16,
    },
    ratingInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ratingScore: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    ratingCount: {
      fontSize: 14,
      color: '#666',
    },
    commentsSection: {
      padding: 16,
    },
    commentsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
    },
  });
  
  export default RatingDetailScreen;