import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Recommendation() {
  const { mood } = useLocalSearchParams();
  const router = useRouter();


  return (
    <View style={styles.container}>
      <Text style={styles.header}>You Seem {typeof mood === 'string' ? mood : '...'}</Text>
      <View style={styles.grid}>
              <TouchableOpacity style={styles.tile} onPress={() => router.push('/explore')}>
                <Ionicons name="play-circle" style={styles.icon} />
                <Text style={styles.tileText}>Play Music</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.tile} onPress={() => router.push('/explore')}>
                <Text style={styles.icon}>🧘</Text>
                <Text style={styles.tileText}>Meditation</Text>
              </TouchableOpacity>
      
              <TouchableOpacity style={styles.tile} onPress={() => router.push('/Journal')}>
                <Text style={styles.icon}>📘</Text>
                <Text style={styles.tileText}>Add to Journal</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tile} onPress={() => router.push('/explore')}>
                <Text style={styles.icon}>💬</Text>
                <Text style={styles.tileText}>Talk to Chatbot</Text>
              </TouchableOpacity>
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 24,
    backgroundColor: '#0d0b2f',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20, 
  },
  tile: {
    backgroundColor: '#1f1b5a',
    width: '48%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 60,
    color: '#fff',
  },
   tileText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
  },
  header: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 40,
    textAlign: 'center',
  },
  
});
