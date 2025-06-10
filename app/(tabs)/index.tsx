import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const mood = typeof params.mood === 'string' ? params.mood : null;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const moodSummary = mood ? `You seem ${mood.toLowerCase()}` : `Let's check your mood`;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{getGreeting()},</Text>
      <Text style={styles.username}>User! 👋</Text>
      <Text style={styles.subtitle}>{moodSummary}</Text>

      <TouchableOpacity style={styles.mainButton} onPress={() => router.push('/MoodDetection')}>
        <Text style={styles.icon}>🎭</Text>
        <Text style={styles.mainText}>Detect Mood</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.tile} onPress={() => router.push('/explore')}>
          <Text style={styles.icon}>🎵</Text>
          <Text style={styles.tileText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => router.push('/explore')}>
          <Text style={styles.icon}>🧘</Text>
          <Text style={styles.tileText}>Meditation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tile} onPress={() => router.push('/Journal')}>
          <Text style={styles.icon}>📘</Text>
          <Text style={styles.tileText}>Mood Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile} onPress={() => router.push('/explore')}>
          <Text style={styles.icon}>📈</Text>
          <Text style={styles.tileText}>Mood Trends</Text>
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
  greeting: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
  },
  username: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 6,
  },
  subtitle: {
    color: '#A8B5DB',
    fontSize: 20,
    marginBottom: 30,
  },
  mainButton: {
    backgroundColor: '#2a1faa',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  mainText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  icon: {
    fontSize: 60,
    color: '#fff',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    backgroundColor: '#1f1b5a',
    width: '48%',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  tileText: {
    color: '#fff',
    marginTop: 8,
    fontSize: 14,
  },
});
