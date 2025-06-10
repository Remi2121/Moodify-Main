import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Button, Image, ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function Chat_Bot() {
  const [topic, setTopic] = useState('');
  const [tips, setTips] = useState('');
  const [question] = useState('How are you feeling today?');
  const [loading, setLoading] = useState(false);

  const getTips = async () => {
    setLoading(true);
    setTips('');
    try {
      const res = await fetch('http://192.168.64.146:8000/get_tips', {  // Updated IP Address
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

      if (typeof data.tips === 'string') {
        const tipsArray = data.tips.split(/\d+\.\s/);
        tipsArray.shift();
        const numberedTips = tipsArray
          .map((tip: string, index: number) => `${index + 1}. ${tip.trim()}`)
          .join('\n\n');

        setTips(numberedTips);
      } else {
        setTips('This is not a mental health related concept.');
      }
    } catch (err) {
      console.error(err);
      setTips('Error fetching tips.');
    }
    setLoading(false);
  };

  return (
    <LinearGradient colors={['#0d0b2f', '#2a1faa']} style={styles.gradient}>
       <Image source={require('../../assets/images/bg.png')} style={styles.bgImage} />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>Your AI Meditation Doctor</Text>
        <Lottie source={require('../../assets/animation/doctoranimation.json')} 
        autoPlay loop 
        style={{ height: 200 }} />
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
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: { flex: 1 },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
    justifyContent: 'center'
  },
  question: { 
    fontSize: 18, 
    marginBottom: 10, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'white',
    borderColor: 'white'
  },
  tips: {
    marginTop: 20,
    fontSize: 18,
    color: 'white',
    textAlign: 'justify'
  },
  header:{
    fontSize: 20,
    textAlign: 'center',
    color: 'lightblue',
    marginBottom: 20
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    height: '50%',
  }
});
