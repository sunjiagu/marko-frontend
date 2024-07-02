import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ 
  children, 
  onPress, 
  variant = 'default', 
  size = 'default', 
  className = '',
  ...props 
}) => {
  const buttonStyles = [
    styles.button,
    styles[variant],
    styles[size],
    className
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  // Variants
  default: {
    backgroundColor: '#007AFF',
  },
  destructive: {
    backgroundColor: '#FF3B30',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  // Sizes
  default: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  lg: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});

export default Button;