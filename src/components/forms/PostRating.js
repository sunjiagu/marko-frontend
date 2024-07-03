import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import StarRating from '../ui/StarRating';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PostRating = ({ rating, setRating, title, setTitle, description, setDescription, image, setImage }) => {
  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.form}>
      <View>
        <StarRating
          rating={rating}
          onRatingChange={setRating}
          size={40}
          style={styles.starRating}
        />
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.imageContainer} onPress={handleImagePick}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <MaterialIcons name="add-box" size={120} color="gray" style={styles.addIcon} />
          )}
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input}
            placeholder="Content Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 40
  },
  imageContainer: {
    width: 120,
    height: 120,

    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addIcon: {
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 40,
    marginTop: 8,
    fontFamily:'PT Sans Bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 70,
    textAlignVertical: 'top',
    fontFamily:'PT Sans Regular'
  },
  starRating: {
    marginVertical: 20,
  },
});

export default PostRating;
