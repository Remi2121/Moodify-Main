import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [previewUri, setPreviewUri] = useState<string | null>(null);
  const [base64Image, setBase64Image] = useState<string | null>(null);

// Replace with your Azure Face API key and endpoint
  const AZURE_API_KEY = '1wRxfbqcijcf8k6u3Y4jFtZUNzycBBMU3TIxeUfOd1WPwgTdDqCVJQQJ99BFACqBBLyXJ3w3AAAKACOGgfrE';
  const AZURE_ENDPOINT = 'https://suve.cognitiveservices.azure.com/face/v1.0/detect?returnFaceAttributes=emotion&recognitionModel=recognition_04&returnRecognitionModel=false';


  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      setPreviewUri(photo.uri);
      setBase64Image(photo.base64 || null);
    }
  };

  const handleRetake = () => {
    setPreviewUri(null);
    setBase64Image(null);
  };

  const handleUsePhoto = async () => {
  if (!base64Image) return;

   try {
      // ✅ Convert base64 to Uint8Array (Expo-compatible)
      const byteCharacters = atob(base64Image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      const response = await fetch(AZURE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream',
          'Ocp-Apim-Subscription-Key': AZURE_API_KEY,
        },
        body: byteArray,
      });

    const data = await response.json();
    if (data[0]?.faceAttributes?.emotion) {
      const emotions = data[0].faceAttributes.emotion;
      const dominantEmotion = Object.keys(emotions).reduce((a, b) =>
        emotions[a] > emotions[b] ? a : b
      );
      console.log('🎯 Detected Mood:', dominantEmotion);
      alert(`Detected Mood: ${dominantEmotion}`);
    } else {
      alert('No emotion detected.');
    }
  } catch (error) {
    console.error('Azure Error:', error);
    alert('Failed to analyze mood.');
  }
};


  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      {previewUri ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: previewUri }} style={styles.previewImage} />
          <View style={styles.previewButtons}>
            <TouchableOpacity style={styles.button} onPress={handleRetake}>
              <Ionicons name="refresh-circle-outline" size={48} color="#000000" />
              <Text style={styles.iconLabel}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleUsePhoto}>
              <Ionicons name="checkmark-circle-outline" size={48} color="#5856D6" />
              <Text style={styles.iconLabel}>Use Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      ):(
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.bottomControls}>
            <TouchableOpacity style={styles.iconButton} onPress={() =>
              setFacing(prev => (prev === 'back' ? 'front' : 'back'))
            }>
              <Ionicons name="camera-reverse-outline" size={32} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={takePhoto}>
              <Ionicons name="camera-outline" size={32} color="#fff" />
            </TouchableOpacity>
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  bottomControls: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  iconButton: {
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
   previewButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 20,
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLabel: {
    color: 'black',
    fontSize: 14,
    marginTop: 4,
  },
});
