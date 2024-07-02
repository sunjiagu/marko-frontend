import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ className, type = 'default', ...props }) => {
  return (
    <TextInput
      style={[styles.input, className]}
      keyboardType={type === 'number' ? 'numeric' : 'default'}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: 'white',
  },
});

export default Input;