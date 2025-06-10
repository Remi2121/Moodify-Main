import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ProfileSidebar.styles';
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated';

const menuItems = ['Mood History', 'Favorites', 'Journal', 'Settings'];

export default function ProfileSidebar() {
  const [menuVisible, setMenuVisible] = useState(true);

  // Replace this with the actual logged-in user's email (from Firebase/Auth context)
  const userEmail = 'dhanoshiganratnarajah2001@gmail.com';

  return (
    <View style={styles.container}>
      {menuVisible ? (
        <Animated.View
          style={styles.sidebar}
          entering={SlideInLeft.duration(1000)}
          exiting={SlideOutLeft.duration(1000)}
        >
          {/* Tooltip */}
          <View style={styles.tooltipContainer}>
            <Text style={styles.tooltipText}>Share a note</Text>
            <View style={styles.tooltipPointer} />
          </View>

          {/* Profile Image with + button */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150' }} // Replace with user's real image
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.addButton} onPress={() => console.log('Edit photo')}>
                <Ionicons name="add" size={18} color="black" />
              </TouchableOpacity>
            </View>

            <Text style={styles.name} numberOfLines={1}>{userEmail}</Text>

            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <TouchableOpacity key={item} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      ) : (
        <TouchableOpacity style={styles.iconButton} onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
