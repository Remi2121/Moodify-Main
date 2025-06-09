// app/Profile/index.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image , StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const menuItems = ['Mood History--', 'Favorites', 'Journal', 'Settings'];

export default function Profile() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <View style={styles.container}>
      {menuVisible ? (
        <View style={styles.sidebar}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: 'https://via.placeholder.com/50' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>Robert Kenady</Text>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {menuItems.map((item) => (
            <TouchableOpacity key={item} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <TouchableOpacity style={styles.iconButton} onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0d0b2f',
  },
  sidebar: {
    width: 220,
    backgroundColor: '#1a174a',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  name: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainText: {
    color: 'red',
    fontSize: 18,
  },
  iconButton: {
    padding: 16,
  },
});
