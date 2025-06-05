import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Chat_Bot() {
  const [topic, setTopic] = useState('');
  const [tips, setTips] = useState('');
  const [question, setQuestion] = useState('How are you feeling today?');
  const [loading, setLoading] = useState(false);  // <-- NEW

  const getTips = async () => {
  setLoading(true);
  setTips('');
  try {
    const res = await fetch('http://192.168.219.146:8000/get_tips', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic })
    });
    
    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error('JSON parse error:', err, 'Raw response:', text);
      setTips('Server returned invalid JSON.');
      setLoading(false);
      return;
    }

    setTips(data.tips);
  } catch (err) {
    console.error(err);
    setTips('Error fetching tips.');
  }
  setLoading(false);
};


  return (
    <LinearGradient colors={['#0d0b2f', '#2a1faa']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.question}>{question}</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe your feeling..."
          value={topic}
          onChangeText={setTopic}
          placeholderTextColor="white"
        />
        <Button title="Get Tips" onPress={getTips} />
        
        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 20 }} />
        ) : (
          <Text style={styles.tips}>{tips}</Text>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  question: { fontSize: 18, marginBottom: 10, fontWeight: 'bold', color: 'white' },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'white',
    borderColor: 'white'
  },
  tips: { marginTop: 20, fontSize: 16, color: 'white' }
});