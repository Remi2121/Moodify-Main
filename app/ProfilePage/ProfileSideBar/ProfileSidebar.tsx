import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ProfileSidebar.styles';
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated';

const menuItems = ['Mood History--', 'Favorites', 'Journal', 'Settings'];

export default function ProfileSidebar() {
  const [menuVisible, setMenuVisible] = useState(true);
  const [isEditingTooltip, setIsEditingTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('Share a note');

  const userEmail = 'dhanoshiganratnarajah2001@gmail.com';

  return (
    <View style={styles.container}>
      {menuVisible ? (
        <Animated.View
          style={styles.sidebar}
          entering={SlideInLeft.duration(1000)}
          exiting={SlideOutLeft.duration(1000)}
        >
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMenuVisible(false)}
          >
            <Ionicons name="close" style={styles.closeIcon} />
          </TouchableOpacity>

          {/* Tooltip */}
          <TouchableOpacity
            style={styles.tooltipContainer}
            onPress={() => setIsEditingTooltip(true)}
            activeOpacity={0.8}
          >
            {isEditingTooltip ? (
              <TextInput
                value={tooltipText}
                onChangeText={setTooltipText}
                onBlur={() => setIsEditingTooltip(false)}
                style={[styles.tooltipText, { backgroundColor: 'white', color: 'black', paddingHorizontal: 6 }]}
                autoFocus
              />
            ) : (
              <Text style={styles.tooltipText}>{tooltipText}</Text>
            )}
            <View style={styles.tooltipPointer} />
          </TouchableOpacity>

          {/* Profile Section */}
          <View style={styles.profileHeader}>
            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.avatar}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => console.log('Edit photo')}
              >
                <Ionicons name="add" size={18} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.name} numberOfLines={1}>
              {userEmail}
            </Text>
          </View>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <TouchableOpacity key={item} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </Animated.View>
      ) : (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => setMenuVisible(true)}
        >
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
