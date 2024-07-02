import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createComment } from '../../services/commentService';

const PostComment = ({ ratingId, userId, onCommentPosted }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    if (comment.trim() === '') return;

    try {
      const newComment = await createComment(comment, userId, ratingId);
      onCommentPosted(newComment);
      setComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={comment}
        onChangeText={setComment}
        placeholder="Write your comment..."
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});

export default PostComment;