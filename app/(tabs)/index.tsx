import { Text, View,TouchableOpacity,StyleSheet } from "react-native";
import{useRouter} from 'expo-router';
import * as Speech from 'expo-speech';


export default function Home() {
  const router = useRouter();

  const mood='Anxious';
  const confidence='78%';

  return (
   <View style={styles.container}>

    {/*Greeting*/}
    <Text style={styles.greeting}>👋 Hello, User!</Text>

    <TouchableOpacity style={styles.button} onPress={() => router.push('/MoodDetection')}>
  <Text style={styles.buttonText}>📷  Scan Mood</Text>
</TouchableOpacity>


    <TouchableOpacity style={styles.button} onPress={() => Speech.speak("How are you feeling today?")}>
  <Text style={styles.buttonText}>🎙 Speak Your Mood</Text>    
</TouchableOpacity>


      {/*Mood Result display*/}
      <View style={styles.resultContainer}>
        <Text style={styles.resultEmoji}>😟</Text>
        <Text style={styles.resultText}>Your mood is: {mood}</Text>
        <Text style={styles.resultText}>Confidence: {confidence}</Text>
      </View>

      {/*Quick Action Buttons*/}
      <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/explore')}>
        <Text style={styles.buttonText}>🎵 Show Music for Me</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/Journal')}>
        <Text style={styles.buttonText}>📖 Log This in Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/Chatbot')}>
        <Text style={styles.buttonText}>💬 Talk to Chatbot</Text>
      </TouchableOpacity>

   </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    paddingTop:80,
    alignItems:'center',
    backgroundColor:'#0d0b2f',
    paddingHorizontal:20,
  },

  greeting:{
    color: '#fff',
    fontSize: 20,
    marginBottom: 30,
  },

  button:{
    backgroundColor: '#2a1faa',
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
  },
  resultContainer:{
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  resultEmoji:{
    fontSize: 50,
  },
  resultText:{
    fontSize: 14,
    color: '#cccccc',
  },
  actionButton:{
    backgroundColor: '#1f1b5a',
    padding: 12,
    borderRadius: 15,
    marginVertical: 6,
    width: '100%',
    alignItems: 'center',
  },
})
