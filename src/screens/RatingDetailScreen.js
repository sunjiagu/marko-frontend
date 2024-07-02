import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/ui/Button';

const RatingDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { ratingId } = route.params;
    const [rating, setRating] = useState(null);
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      loadRatingDetails();
      loadComments();
    }, [ratingId]);
  
    const loadRatingDetails = async () => {
      try {
        const fetchedRating = await fetchRatingById(ratingId);
        setRating(fetchedRating);
      } catch (error) {
        console.error('Error fetching rating details:', error);
      }
    };
  
    const loadComments = async () => {
      try {
        const fetchedComments = await fetchComments(ratingId);
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
  
    const handleRatingSubmit = async (newRating) => {
      try {
        const updatedRating = await submitRating(ratingId, newRating);
        setRating(updatedRating);
      } catch (error) {
        console.error('Error submitting rating:', error);
      }
    };
  
    const handleCommentSubmit = async (newComment) => {
      try {
        await postComment(ratingId, newComment);
        loadComments(); // Reload comments after posting
      } catch (error) {
        console.error('Error posting comment:', error);
      }
    };
  
    if (!rating) {
      return <Text>Loading...</Text>;
    }
  
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