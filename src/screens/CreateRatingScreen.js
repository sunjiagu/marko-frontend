import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PostRating from '../components/forms/PostRating';
import Button from '../components/ui/Button';

const CreateRatingScreen = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      await createRating({
        Rating_subject: title,
        Rating_stars: rating,
        Rating_description: description,
        Rating_image: image,
      });
      navigation.goBack();
    } catch (error) {
      console.error('Error creating rating:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Rating</Text>
        <View style={styles.iconButton} />
      </View>
      
      <PostRating
        rating={rating}
        setRating={setRating}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        image={image}
        setImage={setImage}
      />

      <Button onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </Button>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginBottom: 16
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    fontFamily:"PT Sans Bold"
  },
  iconButton: {
    padding: 8,
  },
  submitButton: {
    backgroundColor: '#FE451A',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal:32,
    marginTop: 360
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontFamily:'PT Sans Bold'
  },
});

export default CreateRatingScreen;
