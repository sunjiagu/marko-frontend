import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RedirectButton = () => {
  const navigation = useNavigation();

  const handleRedirect = () => {
    navigation.navigate('Home'); // Redirect to home page
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleRedirect}>
      <Image
        source={require('../assets/return.png')} // Make sure this image exists in your assets folder
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default RedirectButton;