import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const sidebarLinks = [
  {
    iconName: "home-outline",
    route: "Home",
    label: "Home",
  },
  {
    iconName: "add-circle-outline",
    route: "CreateRating",
    label: "Create Rating",
  },
  {
    iconName: "person-outline",
    route: "Profile",
    label: "Profile",
  },
];

const BottomBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.bottombar}>
      {sidebarLinks.map((link) => {
        const isActive = route.name === link.route;
        return (
          <TouchableOpacity
            key={link.label}
            style={styles.bottombarLink}
            onPress={() => navigation.navigate(link.route)}
          >
            <Ionicons
              name={isActive ? link.iconName.replace('-outline', '') : link.iconName}
              size={24}
              color={isActive ? '#FF6347' : 'black'}
            />
            <Text style={[styles.iconLabel, isActive && styles.activeLabel]}>
              {link.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  bottombar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  bottombarLink: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 2,
  },
  activeLabel: {
    color: '#FF6347',
  },
});

export default BottomBar;