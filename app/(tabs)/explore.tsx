import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

export default function Explore() {
  
  return (
    <LinearGradient colors={['#0d0b2f', '#2a1faa']} style={styles.gradient}>
      <Image source={require('../../assets/images/bg.png')} style={styles.bgImage} />

      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.logoContainer}>
          <Lottie 
            source={require('../../assets/animation/explorelogo.json')} 
            autoPlay 
            loop 
            style={styles.logo}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.headerinput}>Enter the Mood</Text>

          <TextInput
            style={styles.input}
            placeholder="Describe your Mood..."
            placeholderTextColor="white"
          />

          <View style={styles.moodItem}>
            <Text style={styles.moodText}>Sad</Text>
            <View style={styles.squareRow}>
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
            
            </View>
          </View>

          <View style={styles.moodItem}>
            <Text style={styles.moodText}>Happy</Text>
            <View style={styles.squareRow}>
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              
            </View>
          </View>

          <View style={styles.moodItem}>
            <Text style={styles.moodText}>Loneliness</Text>
            <View style={styles.squareRow}>
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
              <View style={styles.squareBox} />
             
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    position: 'relative',
  },

  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '50%',
  },

  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  headerinput: {
    fontSize: 20,
    textAlign: 'left',
    color: 'lightblue',
    marginTop: 10,
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  logo: {
    width: 100,
    height: 100,
  },

  textContainer: {
    marginLeft: 20,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    color: 'white',
    marginRight: 20,
  },

  moodText: {
    fontSize: 20,
    color: 'white',
    marginTop: 8,
  },

  moodItem: {
    marginBottom: 20,
    
  },

  squareRow: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
  },

  squareBox: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
    margin: 3,
    borderRadius: 5,
  },
});
