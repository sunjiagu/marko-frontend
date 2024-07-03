import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign, Entypo, FontAwesome6 } from '@expo/vector-icons';

const sidebarLinks = [
  {
    iconName: "home",
    route: "Home",
    useEntypo: true,
  },
  {
    iconName: "pluscircle",
    filledIconName: "pluscircle",
    route: "CreateRating",
    useAntDesign: true,
  },
  {
    iconName: "user",
    route: "Profile",
    useFontAwesome6: true,
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
            key={link.route}
            style={[
              styles.bottombarLink,
              link.useAntDesign && styles.middleIconContainer,
            ]}
            onPress={() => navigation.navigate(link.route)}
          >
            {link.useEntypo ? (
              <Entypo
                name={link.iconName}
                size={36}
                color={isActive ? '#FE451A' : 'black'}
              />
            ) : link.useAntDesign ? (
              <AntDesign
                name={isActive ? link.filledIconName : link.iconName}
                size={48}
                color={isActive ? '#FE451A' : '#FE451A'}
                style={styles.middleIcon}
              />
            ) : link.useFontAwesome6 ? (
              <FontAwesome6
                name={link.iconName}
                size={30}
                color={isActive ? '#FE451A' : 'black'}
                solid
              />
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottombar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 14,
    paddingBottom:32,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingHorizontal: 50,
  },
  bottombarLink: {
    alignItems: 'center',
  },
  middleIconContainer: {
    marginTop:0 , 
  },
});

export default BottomBar;
